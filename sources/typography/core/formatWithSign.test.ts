/**
 * @vitest-environment jsdom
 */
import {
    describe, expect, test, beforeEach, afterEach, vi,
    type MockInstance,
} from 'vitest';

import { formatWithSign } from './formatWithSign.js';


let languageGetter: MockInstance<() => string>;
let languagesGetter: MockInstance<() => string[]>;

describe('Типографическое форматирование числа', (): void => {
    beforeEach((): void => {
        languageGetter = vi.spyOn(window.navigator, 'language', 'get');
        languagesGetter = vi.spyOn(window.navigator, 'languages', 'get');

        languageGetter.mockReturnValue('ru-RU');
        languagesGetter.mockReturnValue(['ru-RU', 'ru', 'en-US', 'en']);
    });

    afterEach((): void => {
        languageGetter?.mockRestore();
        languagesGetter?.mockRestore();
    });

    test('Форматирование без обязательного знака плюс', (): void => {
        expect(formatWithSign(9120)).toEqual('9 120');
        expect(formatWithSign(-9_120_000)).toEqual('−9 120 000');
        expect(formatWithSign(-0)).toEqual('0');
    });

    test('Форматирование с обязательным знаком плюс', (): void => {
        expect(formatWithSign(9120, true)).toEqual('+9 120');
        expect(formatWithSign(9_120_000, true)).toEqual('+9 120 000');
        expect(formatWithSign(-0, true)).toEqual('0');
    });

});
