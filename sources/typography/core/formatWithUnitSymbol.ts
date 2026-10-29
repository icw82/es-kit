import { formatWithSign } from './formatWithSign.js';
import type { FormatWithSignOptions } from './interfaces.js';


export const formatWithUnitSymbol = (
    value: number,
    unit: string,
    options: FormatWithSignOptions,
): string => {
    // NOTE: Согласно справочнику издателя и автора
    //       (Мильчин, Чельцова; 3-е издание) знаки единиц измерения
    //       отбиваются от числа неразрывным пробелом, кроме знаков
    //       плоского угла: градуса, минуты и секунды. Градус Цельсия
    //       (°C) — обычная единица и отбивается.
    const space = ['°', '′', '″'].includes(unit) ? '' : ' ';

    return `${formatWithSign(value, options)}${space}${unit}`;
};
