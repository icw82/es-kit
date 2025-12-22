export const rand = (min: number, max: number): number => {
    min = Math.trunc(min);
    max = Math.trunc(max);

    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
