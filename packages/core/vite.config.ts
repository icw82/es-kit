/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig, type LibraryOptions } from 'vite';
import dts from 'vite-plugin-dts';


const root = resolve('../../');
const distDir = 'dist';
const name = 'core';
const regexp = new RegExp(
    `packages/${name}/dist/([^/]+?)\.d\.ts$`
);

const getEntries = (modules: string[]): LibraryOptions['entry'] => {
    const result: LibraryOptions['entry'] = {};

    modules.forEach((module): void => {
        result[module] = resolve(
            root,
            `sources/${module}/${name}/index.mts`
        );
    });

    return result;
};

export default defineConfig({
    test: {
        root: '../../',
        include: ['sources/*/core/**/*.test.ts'],
        coverage: {
            provider: 'v8',
            include: ['sources/*/core/**/*.{ts,mts}'],
            exclude: ['**/*.test.ts'],
            reportsDirectory: './packages/core/coverage',
        },
    },
    build: {
        outDir: distDir,
        emptyOutDir: true,
        lib: {
            name: `icw82-es-kit-${name}`,
            formats: ['es'],
            // TODO: Автоматизировать
            entry: getEntries(['basics', 'time', 'typography']),
            // fileName: (format, entryName): string => {
            //     console.log('\n>>> src', format, entryName);

            //     return `TEST-${entryName}.${format}.js`;
            // },
        },
        sourcemap: false,

        rollupOptions: {

        },
    },
    plugins: [dts({
        include: [`../../sources/*/${name}/**`],
        // tsconfigPath: '../../tsconfig.json',
        insertTypesEntry: true,
        // rollupTypes: true,
        // bundledPackages: ['basics'],
        beforeWriteFile: (filePath) => {
            const entryName = filePath.match(regexp)?.at(1);

            if (!entryName) {
                return;
            }

            return {
                filePath,
                content:
                    `export * from './${ entryName }/${name}/index.mjs';`,
            };
        },
    })],
});
