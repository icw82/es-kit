import { describe, expect, test } from 'vitest';
import { isNonEmptyString } from './isNonEmptyString.js';

describe('isNonEmptyString', (): void => {
    test('Проверка на не пустую строку', (): void => {
        expect(isNonEmptyString('')).toBe(false);
        expect(isNonEmptyString(void 0)).toBe(false);
        expect(isNonEmptyString(123)).toBe(false);

        expect(isNonEmptyString('test')).toBe(true);
    });
});
