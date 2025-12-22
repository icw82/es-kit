import { rand } from './rand.js';

interface RandSequenceParams {
    min: number;
    max: number;
    length: number;
    repeatProtect?: number;
}

export const randSequence = ({
    min,
    max,
    length,
    repeatProtect = 0,
}: RandSequenceParams): number[] => {
    min = Math.trunc(min);
    max = Math.trunc(max);

    const range = Math.abs(min - max);

    if (repeatProtect > range) {
        console.error(
            'Защита от повтора не может быть длиннее, ' +
			'чем разница между min и max.',
        );

        repeatProtect = range;
    }

    if (repeatProtect === range) {
        return Array.from({ length }, (_, i) => min + i)
            .toSorted(() => Math.random() - 0.5);
    }

    const sequence = Array.from({ length }, () => -1).reduce(
        (result: number[], value, index): number[] => {
            const prevValues =
                result.slice(Math.max(0, index - repeatProtect), index);

            while (value === -1 || prevValues.includes(value)) {
                value = rand(min, max);
            }

            result.push(value);

            return result;
        },
        [],
    );

    return sequence;
};
