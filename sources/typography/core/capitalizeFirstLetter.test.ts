import { describe, expect, test } from 'vitest';

import { capitalizeFirstLetter } from './capitalizeFirstLetter.js';

describe('capitalizeFirstLetter', (): void => {
    test('Преобразует первый символ в верхний регистр', (): void => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
        expect(capitalizeFirstLetter('hELLO')).toBe('HELLO');
        expect(capitalizeFirstLetter('heLLo')).toBe('HeLLo');
        expect(capitalizeFirstLetter('hello 123')).toBe('Hello 123');
        expect(capitalizeFirstLetter('')).toBe('');
        // @ts-expect-error expected
        expect(capitalizeFirstLetter(null)).toBe('');
        // @ts-expect-error expected
        expect(capitalizeFirstLetter(void 0)).toBe('');
    });
});
