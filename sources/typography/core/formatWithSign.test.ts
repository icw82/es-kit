import { describe, expect, test } from 'vitest';

import { formatWithSign } from './formatWithSign.js';


describe('Типографическое форматирование числа', (): void => {
    test('Форматирование без обязательного знака плюс', (): void => {
        const ru = { locale: 'ru-RU' };

        expect(formatWithSign(9120, ru)).toEqual('9 120');
        expect(formatWithSign(-9_120_000, ru))
            .toEqual('−9 120 000');
        expect(formatWithSign(-0, ru)).toEqual('0');
    });

    test('Форматирование с обязательным знаком плюс', (): void => {
        const ru = { locale: 'ru-RU', showPlus: true };

        expect(formatWithSign(9120, ru)).toEqual('+9 120');
        expect(formatWithSign(9_120_000, ru)).toEqual('+9 120 000');
        expect(formatWithSign(-0, ru)).toEqual('0');
    });

    test('Разделители берутся из переданной локали', (): void => {
        expect(formatWithSign(-9_120_000.5, { locale: 'en-US' }))
            .toEqual('−9,120,000.5');
        expect(formatWithSign(-9_120_000.5, { locale: 'ru-RU' }))
            .toEqual('−9 120 000,5');
    });
});
