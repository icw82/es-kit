import { describe, test, expect } from 'vitest';

import { isObjectArray } from './isObjectArray.js';


describe('isObjectArray', (): void => {
    test('Проверка на массив объектов', (): void => {
        expect(isObjectArray(['test', {}])).toBe(false);
        expect(isObjectArray(['1', {}])).toBe(false);
        expect(isObjectArray([null, {}])).toBe(false);

        expect(isObjectArray([])).toBe(true);
        expect(isObjectArray([{}])).toBe(true);
        expect(isObjectArray([{}, []])).toBe(true);
    });
});
