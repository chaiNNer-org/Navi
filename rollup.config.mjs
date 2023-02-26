import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

const globalNavi = fs.readFileSync('src/global.navi', 'utf-8');

/** @type {import("rollup").RollupOptions} */
const config = {
    input: 'src/main.ts',
    external: [/^antlr4$/],
    output: [
        {
            file: 'dist/main.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/module.js',
            format: 'module',
            sourcemap: true,
        },
    ],
    plugins: [
        replace({
            values: {
                "import fs from 'fs'": '',
                "fs.readFileSync(__dirname + '/global.navi', 'utf-8')": JSON.stringify(globalNavi),
            },
            delimiters: ['', ''],
        }),
        nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts'] }),
        typescript(),
    ],
};

// eslint-disable-next-line import/no-default-export
export default config;
