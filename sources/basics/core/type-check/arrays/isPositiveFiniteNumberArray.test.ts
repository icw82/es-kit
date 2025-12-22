import { describe, expect, test } from 'vitest';
import { isPositiveFiniteNumberArray } from './isPositiveFiniteNumberArray.js';

describe('isPositiveFiniteNumberArray', (): void => {
    test('Проверка на массив положительных конечных чисел', (): void => {
        expect(isPositiveFiniteNumberArray([NaN, 1])).toBe(false);
        expect(isPositiveFiniteNumberArray([0, 1])).toBe(false);
        expect(isPositiveFiniteNumberArray([-1, 1])).toBe(false);
        expect(isPositiveFiniteNumberArray([Infinity, 1])).toBe(false);
        expect(isPositiveFiniteNumberArray([-Infinity, 1])).toBe(false);

        expect(isPositiveFiniteNumberArray([])).toBe(true);
        expect(isPositiveFiniteNumberArray([1])).toBe(true);
    });
});
