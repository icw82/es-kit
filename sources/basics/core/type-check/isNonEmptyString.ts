export const isNonEmptyString = (
    value: unknown,
): value is Exclude<string, ''> =>
    typeof value === 'string' &&
	value.trim() !== '';
