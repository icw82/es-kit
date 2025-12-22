import { describe, expect, test } from 'vitest';

import { isNonEmptyArray } from './isNonEmptyArray.js';


describe('isNonEmptyArray', (): void => {
    test('Проверка на не пустой массив', (): void => {
        expect(isNonEmptyArray([])).toBe(false);
        expect(isNonEmptyArray(void 0)).toBe(false);

        expect(isNonEmptyArray([1])).toBe(true);
    });
});
