export const isStringArray = (value: unknown): value is string[] => {
    if (!Array.isArray(value)) {
        return false;
    }

    const hasNonStringValue = value.some((item) => typeof item !== 'string');

    if (hasNonStringValue) {
        return false;
    }

    return true;
};
