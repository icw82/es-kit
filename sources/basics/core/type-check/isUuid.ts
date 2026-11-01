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
    // Строгий вариант проверяет версию и вариант: третья группа
    // начинается с [0-5], четвёртая — с [089ab].

    return regex.test(loCase);
};
