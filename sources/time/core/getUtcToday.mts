export const getUtcToday = (): Date =>
    new Date(new Date().setUTCHours(0, 0, 0, 0));
