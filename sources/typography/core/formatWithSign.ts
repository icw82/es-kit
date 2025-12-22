/* eslint-disable no-nested-ternary */
export const formatWithSign = (value: number, showPlus = false): string => {
    // NOTE: Расположен внутри, т. к. без этого юнит-тест работает с локалью US
    const formatter = Intl.NumberFormat(window.navigator.language);

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
