import axios, {AxiosResponse} from "axios";
import {Config} from "./state/settings";
import {NodeState, NodeStore} from "./state/trackTree";
import {createSectionStore, Section, SectionState} from "./state/section";
import {Writable} from "svelte/store";
import {encodingToArray, encodingToString, MusenetEncoding} from "./state/encoding";
import {render} from "./audio/audioRender";
import {decode} from "./audio/decoder";

//TODO cancel all requests when loading

export async function request(config: Config, store: NodeStore, state: NodeState) {
    if (store.type === "root") {
        return await requestInternal(config, store, [], 0);
    }
    if (store.type === "branch" && state.type === "branch") {
        return await requestInternal(config, store, state.encoding, state.section.endsAt);
    }
    throw new Error("Unrecognised combination of store and state types " + store.type + "/" + state.type);
}

async function requestInternal(config: Config, store: NodeStore, prevEncoding: MusenetEncoding, prevDuration: number) {
    const data = {
        ...config,
        encoding: encodingToString(prevEncoding),
        audioFormat: "mp3"
    };

    type ResponseData = {
        completions: Completion[]
    };

    store.updatePendingLoad(it => it + 4);

    let response: Completion[] | null = null;
    while (response === null) {
        response = await axios({
            method: "POST",
            url: "https://musenet.openai.com/sample",
            data
        })
            .then((res: AxiosResponse<ResponseData>) => res.data.completions)
            .catch(() => null);
    }
    const promises = response.map((completion: Completion) => parseCompletion(completion, prevEncoding, prevDuration));
    return Promise.all(promises)
        .then((sections: Section[]) => sections.map((section: Section) => createSectionStore(section)))
        .then((sectionStores: Writable<SectionState>[]) =>
            sectionStores.map((sectionStore: Writable<SectionState>) => store.addChild(sectionStore)))
        .finally(() => store.updatePendingLoad(it => it - 4));
}

type Completion = {
    encoding: string;
    // totalTime: number;
    // tracks: Array<{
    //     instrument: Instrument,
    //     notes: Note[]
    // }>
    audioFile: string;
}

async function parseCompletion(completion: Completion, prevEncoding: MusenetEncoding, prevDuration: number): Promise<Section> {
    const fullEncoding = encodingToArray(completion.encoding);
    const encoding = fullEncoding.slice(prevEncoding.length);
    const {notes, duration} = await decode(encoding);
    const startsAt = prevDuration;
    const endsAt = startsAt + duration;
    const audio = await render(notes, endsAt - startsAt);

    return {encoding, startsAt, endsAt, notes, audio};
}
