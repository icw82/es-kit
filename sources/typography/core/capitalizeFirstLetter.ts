import { isNonEmptyString } from
    '../../basics/core/type-check/isNonEmptyString.js';


export const capitalizeFirstLetter = (s: string): string => {
    if (isNonEmptyString(s)) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return '';
};
