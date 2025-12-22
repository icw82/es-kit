/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { getEntries } from '../../builder/getEntries.mjs';


const root = resolve('../../');
const sourcesDir = resolve(root, 'sources');
const distDir = 'dist';
const name = 'react';
const regexp = new RegExp(
    `packages/${name}/dist/([^/]+?)\.d\.ts$`
);

export default defineConfig({
    test: {
        root: '../../',
        include: [`sources/*/${name}/**/*.test.ts`],
        coverage: {
            provider: 'v8',
            include: [`sources/*/${name}/**/*.{ts,mts}`],
            exclude: ['**/*.test.ts'],
            reportsDirectory: `./packages/${name}/coverage`,
        },
    },
    build: {
        outDir: distDir,
        emptyOutDir: true,
        lib: {
            name: `icw82-es-kit-${name}`,
            formats: ['es'],
            entry: getEntries(sourcesDir, name),
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
