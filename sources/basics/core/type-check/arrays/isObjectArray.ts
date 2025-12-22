import { isObject } from '../isObject.js';

export const isObjectArray =
	<Obj extends object = object>(value: unknown): value is Obj[] =>
	    Array.isArray(value) && value.every(isObject);
