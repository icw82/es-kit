import { formatWithSign } from './formatWithSign.js';


export const formatWithUnitSymbol = (
    value: number,
    unit: string,
    showPlus = false,
): string => {
    // NOTE: Согласно справочнику издателя и автора
    //      (Мильчин, Чельцова; 3-е издание) от предстоящего числа
    //       знаки единиц измерения отбиваются пробелом,
    //       кроме знаков градуса, секунды и минуты
    const space = ['°', '′', '″'].includes(unit) ? '' : ' ';

    return `${formatWithSign(value, showPlus)}${space}${unit}`;
};
