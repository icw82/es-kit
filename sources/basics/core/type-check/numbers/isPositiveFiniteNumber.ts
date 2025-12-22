import { isFiniteNumber } from './isFiniteNumber.js';

export const isPositiveFiniteNumber = (value: unknown): value is number => {
    return isFiniteNumber(value) && value > 0;
};
