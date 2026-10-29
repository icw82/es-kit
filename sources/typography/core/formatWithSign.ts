/* eslint-disable no-nested-ternary */
import type { FormatWithSignOptions } from './interfaces.js';


export const formatWithSign = (
    value: number,
    { locale, showPlus = false }: FormatWithSignOptions,
): string => {
    // NOTE: Локаль передаётся явно и совпадает с языком интерфейса.
    //       Настройки браузера не используются: иначе одно и то же
    //       число у разных пользователей выглядит по-разному.
    const formatter = new Intl.NumberFormat(locale);

    // NOTE: Для представления отрицательных чисел следует применять
    //       знак минуса. В отличие от дефиса и среднего тире его ширина
    //       равна ширине знака плюс, а высота соответствует высоте его
    //       горизонтальной черты.
    const sign = value === 0
        ? ''
        : value < 0
            ? '−'
            : showPlus ? '+' : '';

    const abs = Math.abs(value);

    return `${sign}${formatter.format(abs)}`;
};
