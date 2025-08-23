import { resolve } from 'node:path';
import { defineConfig, type LibraryOptions } from 'vite';
import dts from 'vite-plugin-dts';


const root = resolve('../../');
const distDir = 'dist';
const name = 'core';
const regexp = new RegExp(
    `packages/${name}/dist/(.+?)/${name}`
);

const getEntries = (modules: string[]): LibraryOptions['entry'] => {
    const result: LibraryOptions['entry'] = {};

    modules.forEach((module): void => {
        result[module] = resolve(
            root,
            `sources/modules/${module}/${name}/index.mts`
        );
    });

    return result;
};

export default defineConfig({
    build: {
        outDir: distDir,
        emptyOutDir: true,
        lib: {
            name: `icw82-es-kit-${name}`,
            formats: ['es'],
            entry: getEntries(['basics', 'time']),
        },
        sourcemap: true,
    },
    plugins: [dts({
        include: [`../../sources/modules/*/${name}/**/*.mts`],
        beforeWriteFile: (filePath): { filePath: string; } => {
            return {
                filePath: filePath.replace(
                    regexp,
                    `packages/${name}/dist/$1/`
                ),
            };
        },
    })],
});
