export const isObject =
	<Obj extends object = object>(value: unknown): value is Obj =>
	    typeof value === 'object' && value !== null;
