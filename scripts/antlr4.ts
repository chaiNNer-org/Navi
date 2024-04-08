import { exec as _exec } from 'child_process';
import { constants } from 'fs';
import { access, mkdir } from 'fs/promises';
import Downloader from 'nodejs-file-downloader';
import * as path from 'path';
import util from 'util';

const exec = util.promisify(_exec);

const version = '4.13.1';
const jar = path.join(__dirname, '.antlr', `antlr-${version}-complete.jar`);

const fileExists = (file: string): Promise<boolean> =>
    access(file, constants.F_OK).then(
        () => true,
        () => false
    );

const downloadANTLR4 = async () => {
    const dir = path.dirname(jar);
    const url = `https://www.antlr.org/download/antlr-${version}-complete.jar`;

    console.log(`Downloading ${url}...`);

    await mkdir(dir, { recursive: true });

    const downloader = new Downloader({ url, directory: dir });
    await downloader.download();
};

const run = async () => {
    if (!(await fileExists(jar))) {
        console.log(`Unable to find ANTLR4 jar`);

        await downloadANTLR4();
    }

    console.log(`Running ANTLR4...`);
    const { stdout, stderr } = await exec(`java -jar "${jar}" src/antlr4/Navi.g4 -o ./src/antlr4/`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
};

run().then(
    () => console.log('Done.'),
    (reason) => {
        console.error('An error occurred:');
        console.error(reason);
        process.exit(1);
    }
);
