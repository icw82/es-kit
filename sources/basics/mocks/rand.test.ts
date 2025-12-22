/* eslint-disable no-magic-numbers */
import { describe, expect, test } from 'vitest';

import { rand } from './rand.js';


describe('rand', () => {
    test('Случайное целое число из диапазона', () => {
        expect(rand(1, 2)).toBeGreaterThanOrEqual(1);
        expect(rand(1, 2)).toBeLessThanOrEqual(2);
        expect(rand(1, 2)).toBeGreaterThanOrEqual(1);
        expect(rand(1, 2)).toBeLessThanOrEqual(2);
        expect(rand(1, 2)).toBeGreaterThanOrEqual(1);
        expect(rand(1, 2)).toBeLessThanOrEqual(2);
        expect(rand(1, 2)).toBeGreaterThanOrEqual(1);
        expect(rand(1, 2)).toBeLessThanOrEqual(2);
        expect(rand(1, 2)).toBeGreaterThanOrEqual(1);
        expect(rand(1, 2)).toBeLessThanOrEqual(2);

        expect(rand(10, 50)).toBeGreaterThanOrEqual(10);
        expect(rand(10, 50)).toBeGreaterThanOrEqual(10);
        expect(rand(10, 50)).toBeGreaterThanOrEqual(10);
        expect(rand(10, 50)).toBeGreaterThanOrEqual(10);
        expect(rand(10, 50)).toBeGreaterThanOrEqual(10);

        expect(rand(10, 50)).toBeLessThanOrEqual(50);
        expect(rand(10, 50)).toBeLessThanOrEqual(50);
        expect(rand(10, 50)).toBeLessThanOrEqual(50);
        expect(rand(10, 50)).toBeLessThanOrEqual(50);
        expect(rand(10, 50)).toBeLessThanOrEqual(50);
    });
});
