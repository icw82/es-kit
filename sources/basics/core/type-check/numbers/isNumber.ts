import type { Refinement } from '../interfaces.js';

export const isNumber: Refinement<number> =
    (value): value is number =>
        typeof value === 'number';
