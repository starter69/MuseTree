import {SimpleFmSynth} from "../nodes/simpleFmSynth";
import {ENVELOPE_AHDSR} from "../nodes/envelopes";

export class Piano extends SimpleFmSynth<"piano"> {
    protected instrument = "piano" as const;

    protected amplitudeEnvelope: ENVELOPE_AHDSR = {
        attack: 0.001,
        hold: 0.01,
        decay: 0.7,
        sustain: 0,
        release: 0.1
    };
    protected amplitudeGain: number = 0.3;
    protected amplitudeWave: OscillatorType = "sine";
    protected amplitudeFrequencyMultiplier: number = 1;
    protected amplitudePitchAdjustment: number | null = null;

    protected frequencyEnvelope: ENVELOPE_AHDSR = {
        attack: 0.01,
        hold: 0.01,
        decay: 0.7,
        sustain: 0.1,
        release: 0.05
    };
    protected frequencyGain: number = 3;
    protected frequencyWave: OscillatorType = "triangle";
    protected frequencyFrequencyMultiplier: number = 1;
    protected frequencyPitchAdjustment: number | null = -15;

    protected offDelay: number = 0.25;
}
