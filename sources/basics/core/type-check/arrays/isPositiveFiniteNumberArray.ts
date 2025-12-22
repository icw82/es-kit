import { isPositiveFiniteNumber } from '../numbers/isPositiveFiniteNumber.js';

export const isPositiveFiniteNumberArray =
	(value: unknown): value is number[] => {
	    return (
	        Array.isArray(value) &&
			value.every(isPositiveFiniteNumber)
	    );
	};
