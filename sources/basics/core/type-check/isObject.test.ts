import { describe, expect, test } from 'vitest';

import { isObject } from './isObject.js';


describe('isObject', (): void => {
    test('Проверка на объект', (): void => {
        expect(isObject(void 0)).toBe(false);
        expect(isObject(123)).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject('test')).toBe(false);
        expect(isObject(true)).toBe(false);
        expect(isObject(Symbol('test'))).toBe(false);

        expect(isObject({})).toBe(true);
        expect(isObject(new Date())).toBe(true);
    });
});
