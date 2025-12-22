export const sleep = (duration: number): Promise<void> =>
    new Promise((resolve): void => void setTimeout(resolve, duration));
