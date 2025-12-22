import { describe, expect, test } from 'vitest';

import { isPositiveFiniteNumber } from './isPositiveFiniteNumber.js';

describe('isPositiveFiniteNumber', (): void => {
    test('Проверка на положительное конечное число', (): void => {
        expect(isPositiveFiniteNumber(0)).toBe(false);
        expect(isPositiveFiniteNumber(-1)).toBe(false);
        expect(isPositiveFiniteNumber(Infinity)).toBe(false);
        expect(isPositiveFiniteNumber(-Infinity)).toBe(false);

        expect(isPositiveFiniteNumber(1)).toBe(true);
    });
});
