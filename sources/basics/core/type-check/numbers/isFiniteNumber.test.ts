import { describe, expect, test } from 'vitest';

import { isFiniteNumber } from './isFiniteNumber.js';

describe('isFiniteNumber', (): void => {
    test('Проверка на конечное число', () => {
        expect(isFiniteNumber(Infinity)).toBe(false);
        expect(isFiniteNumber(-Infinity)).toBe(false);
        expect(isFiniteNumber(NaN)).toBe(false);
        expect(isFiniteNumber([])).toBe(false);

        expect(isFiniteNumber(123)).toBe(true);
        expect(isFiniteNumber(0)).toBe(true);
        expect(isFiniteNumber(-123)).toBe(true);
    });
});
