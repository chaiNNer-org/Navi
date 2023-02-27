import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import run from '@rollup/plugin-run';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

const globalNavi = fs.readFileSync('src/global.navi', 'utf-8');

/** @type {import("rollup").RollupOptions} */
const config = {
    input: 'src/main.ts',
    output: [
        {
            file: 'dist/main.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/module.mjs',
            format: 'module',
            sourcemap: true,
        },
    ],
    plugins: [
        replace({
            values: {
                "fs.readFileSync(__dirname + '/global.navi', 'utf-8')": JSON.stringify(globalNavi),
            },
            delimiters: ['', ''],
        }),
        nodeResolve({ extensions: ['.mjs', '.js', '.json', '.ts'] }),
        typescript(),
        run({
            execArgv: ['-r', 'source-map-support/register'],
        }),
    ],
};

// eslint-disable-next-line import/no-default-export
export default config;
