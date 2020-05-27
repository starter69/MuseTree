import {createSectionStore, Section, SectionStore} from "../state/section";
import {BranchState, BranchStore, createTrackTree, NodeStore, TreeState, TreeStore} from "../state/trackTree";
import {get_store_value} from "svelte/internal";
import {render} from "../audio/audioRender";
import download from "downloadjs";
import {decode} from "../audio/decoder";
import {encodingToArray, encodingToString, MusenetEncoding} from "../state/encoding";
import {writable, Writable} from "svelte/store";
import {CancellablePromise, makeCancellable} from "./cancelPromise";
import {Cancel} from "axios";

type LoadingProgressState = null | {
    done: number;
    total: number;
}
export const loadingProgressStore: Writable<LoadingProgressState> = writable(null);

let loadingPromise: CancellablePromise<TrackTreeDomainRoot> | null = null;
let loadingMidiPromise: CancellablePromise<SectionStore> | null = null;

export function cancelLoading() {
    if(loadingPromise) loadingPromise.cancel();
    if(loadingMidiPromise) loadingMidiPromise.cancel();
}

type TrackTreeDtoRoot = {
    children: TrackTreeDtoBranch[];
}

type TrackTreeDtoBranch = {
    encoding: string;
    children: TrackTreeDtoBranch[];
}

type TrackTreeDomainRoot = {
    children: TrackTreeDomainBranch[];
}

type TrackTreeDomainBranch = {
    children: TrackTreeDomainBranch[];
    sectionStore: SectionStore;
}

export function save(tree: TreeStore): void {
    const serialised = serialise_Root(tree);
    const json = JSON.stringify(serialised);
    download(json, "Save.mst");
}

function serialise_Root(tree: TreeStore): TrackTreeDtoRoot {
    const state: TreeState = get_store_value(tree);
    const dto: TrackTreeDtoRoot = {
        children: []
    };
    Object.values(state.children).forEach(child => {
        dto.children.push(serialise_Branch(child))
    });
    return dto;
}

function serialise_Branch(tree: BranchStore): TrackTreeDtoBranch {
    const state: BranchState = get_store_value(tree);
    const sectionDto = {
        ...state.section
    };
    delete sectionDto.audio;
    const dto: TrackTreeDtoBranch = {
        encoding: encodingToString(state.section.encoding),
        children: []
    };
    Object.values(state.children).forEach(child => {
        dto.children.push(serialise_Branch(child))
    });
    return dto;
}

function totalEncodingLength_Root(tree: TrackTreeDtoRoot): number {
    return tree.children.map(totalEncodingLength_Branch).reduce((a, b) => a + b, 0);
}

function totalEncodingLength_Branch(tree: TrackTreeDtoBranch): number {
    return encodingToArray(tree.encoding).length + tree.children.map(totalEncodingLength_Branch).reduce((a, b) => a + b, 0);
}

export async function load(tree: TreeStore, json: string) {
    const deserialised: TrackTreeDtoRoot = JSON.parse(json);

    loadingProgressStore.set({
        done: 0,
        total: totalEncodingLength_Root(deserialised)
    })

    const innerLoadingPromise: Promise<TrackTreeDomainRoot> = load_inner_root(deserialised);
    loadingPromise = makeCancellable(innerLoadingPromise);

    await loadingPromise.then(async (newTree: TrackTreeDomainRoot) => {
        clearTree(tree);
        for (let child of newTree.children) {
            await addToTree(tree, child);
        }
    }).catch(reason => {
        if(!reason?.cancelled) console.log(`promise rejected, reason: ${reason}`);
    })

    loadingProgressStore.set(null);
}

export async function loadMidi(encoding: string, sectionEndsAt: number, importUnderStore: NodeStore) {
    const encodingArray = encodingToArray(encoding);
    loadingProgressStore.set({done: 0, total: encodingArray.length});


    const innerLoadingPromise: Promise<SectionStore> = loadMidi_inner(encodingArray, sectionEndsAt);
    loadingMidiPromise = makeCancellable(innerLoadingPromise);

    await loadingMidiPromise.then((sectionStore: SectionStore) => {
        importUnderStore.addChild(sectionStore)
    }).catch(reason => {
        if(!reason?.cancelled) console.log(`promise rejected, reason: ${reason}`);
    })

    loadingProgressStore.set(null);
}

async function loadMidi_inner(encodingArray: MusenetEncoding, sectionEndsAt: number): Promise<SectionStore> {
    const section = await createSectionFromEncoding(encodingArray, sectionEndsAt)
    return createSectionStore(section);
}

async function load_inner_root(serialised: TrackTreeDtoRoot): Promise<TrackTreeDomainRoot> {
    const children: TrackTreeDomainBranch[] = await Promise.all(serialised.children.map(child => load_inner_branch(0, child)));
    return { children };
}

async function load_inner_branch(startsAt: number, {encoding, children}: TrackTreeDtoBranch): Promise<TrackTreeDomainBranch> {
    const encodingArray = encodingToArray(encoding);
    const section = await createSectionFromEncoding(encodingArray, startsAt);
    const sectionStore = createSectionStore(section);
    loadingProgressStore.update(state => {
        if(state === null) return null;
        return {...state, done: state.done + encodingArray.length};
    });
    const domainChildren = await Promise.all(children.map(child => load_inner_branch(section.endsAt, child)));
    return {
        sectionStore,
        children: domainChildren
    }
}

async function addToTree(parent: NodeStore, child: TrackTreeDomainBranch) {
    const subtree = await parent.addChild(child.sectionStore);
    for (let grandChild of child.children) {
        await addToTree(subtree, grandChild)
    }
}

function clearTree(tree: TreeStore) {
    const treeState: TreeState = get_store_value(tree);
    Object.keys(treeState.children).forEach(key => tree.deleteChild(key as any));
    tree.updatePendingLoad(() => 0);
    tree.resetNextChildIndex();
}

export async function createSectionFromEncoding(originalEncoding: MusenetEncoding, startsAt: number): Promise<Section> {
    const {encoding, notes, duration} = await decode(originalEncoding);
    const audio = await render(notes, duration);
    const endsAt = startsAt + duration;
    return {
        encoding: encoding,
        notes,
        startsAt,
        endsAt,
        audio
    };
}