import type { Refinement } from './interfaces.js';

export const isArrayOf = <T>(elem: Refinement<T>): Refinement<T[]> => {
    return (value: unknown): value is T[] =>
        Array.isArray(value) && (value as unknown[]).every(elem);
};
