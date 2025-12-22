/* eslint-disable no-magic-numbers */
import { describe, expect, test, beforeEach, vi } from 'vitest';
import { randSequence } from './randSequence.js';

describe('randSequence', () => {
    beforeEach(() => {
        vi.spyOn(console, 'error').mockImplementation(vi.fn());
    });

    test('С повторениями', () => {
        const seq = randSequence({
            min: 0,
            max: 5,
            length: 500,
        });

        expect(seq.every((i) => i >= 0 && i <= 5)).toEqual(true);
    });

    test('С Защитой от повторения', () => {
        const seq = randSequence({
            min: 100,
            max: 500,
            length: 400,
            repeatProtect: 400,
        }).sort();

        expect(seq[0]).toEqual(100);
        expect(seq[399]).toEqual(499);
    });

    test('С Защитой от повторения (расстояние защиты больше количества элементов)', () => {
        const seq = randSequence({
            min: 100,
            max: 500,
            length: 400,
            repeatProtect: 800,
        }).sort();

        expect(seq[0]).toEqual(100);
        expect(seq[399]).toEqual(499);
    });
});
