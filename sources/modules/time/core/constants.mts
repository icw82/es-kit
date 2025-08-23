export enum MS {
    // Точное значение
    SECOND = 1_000,
    MINUTE = 60_000,
    HOUR = 3600_000,
    DAY = 86_400_000, // Сутки СИ,
    WEEK = 604_800_000, // 7 суток,

    // Примерное значение
    MONTH = 2_629_743_750, // 1/12 тропического года
    YEAR = 31_556_925_000, // Тропический год

    // Number.MAX_SAFE_INTEGER → 9_007_199_254_740_991
}

export enum TIME_DIRECTION {
    PAST = 'past',
    FUTURE = 'future',
    BOTH = 'both',
}

/**
 * Текущая разница между UTC и локальным временем в миллисекундах
 */
export const CURRENT_OFFSET = new Date().getTimezoneOffset() * MS.MINUTE;
