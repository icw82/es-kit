/// <reference types="vitest" />
import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { type LibraryOptions } from 'vite';


export const getEntries = (
    sourcesDir: string,
    moduleName: string,
): LibraryOptions['entry'] => {
    const result: LibraryOptions['entry'] = Object.fromEntries(
        readdirSync(sourcesDir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent): [string, string] => [
                dirent.name,
                resolve(sourcesDir, dirent.name, moduleName, 'index.mts'),
            ])
            .filter(([, path]) => existsSync(path))
    );

    console.log('>>> Entries:', result);

    return result;
};
