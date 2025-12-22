import { isNonEmptyString } from '@icw82/es-kit-core/basics';


export const capitalizeFirstLetter = (s: string): string => {
    if (isNonEmptyString(s)) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return '';
};
