/**
 * Стандарт: https://www.rfc-editor.org/rfc/rfc4122
 */
export const isUuid = (value: unknown): boolean => {
    if (typeof value !== 'string') {
        return false;
    }

    const loCase = value.toLowerCase();

    const regex = /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/gi;

    // https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
    // /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    return regex.test(loCase);
};
