import type { Refinement } from '../interfaces.js';

export const isString: Refinement<string> =
    (value): value is string =>
        typeof value === 'string';
