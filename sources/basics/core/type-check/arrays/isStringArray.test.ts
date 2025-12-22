import { describe, expect, test } from 'vitest';

import { isStringArray } from './isStringArray.js';


describe('isStringArray', (): void => {
    test('Проверка на массив строк', (): void => {
        expect(isStringArray([1, 'test'])).toBe(false);
        expect(isStringArray([NaN, 'test'])).toBe(false);
        expect(isStringArray([void 0, 'test'])).toBe(false);

        expect(isStringArray([])).toBe(true);
        expect(isStringArray(['test', 'test2'])).toBe(true);
    });
});
