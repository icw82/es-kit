import { describe, expect, test } from 'vitest';

import { formatWithUnitSymbol } from './formatWithUnitSymbol.js';


describe('Число со знаком единицы', (): void => {
    const ru = { locale: 'ru-RU' };

    test('Единица отбивается неразрывным пробелом', (): void => {
        expect(formatWithUnitSymbol(120, 'мс', ru)).toEqual('120 мс');
        expect(formatWithUnitSymbol(-5, '%', ru)).toEqual('−5 %');
    });

    test('Знаки плоского угла пишутся слитно', (): void => {
        expect(formatWithUnitSymbol(45, '°', ru)).toEqual('45°');
        expect(formatWithUnitSymbol(30, '′', ru)).toEqual('30′');
        expect(formatWithUnitSymbol(20, '°C', ru)).toEqual('20 °C');
    });

    test('Плюс у положительных — по запросу', (): void => {
        expect(formatWithUnitSymbol(5, '%', { ...ru, showPlus: true }))
            .toEqual('+5 %');
    });
});
