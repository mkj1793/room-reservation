const fs = require('fs');
const util = require('util');
const { exec, spawn } = require('child_process');
const execPromisified = util.promisify(exec);

const storybookPath = './storybook-static';
const hdsDemoFolderPath = '../../../hds-demo/docs';
const hdsDemoURL = 'https://city-of-helsinki.github.io/hds-demo';

const logStep = (msg) => console.log(`${msg}`);

const run = (...args) =>
  new Promise((resolve, reject) => {
    const [cmd, ...argv] = args.map((arg) => arg.toString().split(/\s+/)).flat();
    const proc = spawn(cmd, argv, { stdio: 'inherit' });

    const handleError = (err) => reject(err.message);
    const handleExit = (code) => {
      if (code === 0) return resolve(code);
      else return reject(`Process exited with a non-zero code (${code})`);
    };

    proc.on('error', handleError);
    proc.on('exit', handleExit);
  });

const buildStorybook = async () => {
  return await run('yarn build-storybook');
};

const getBranchName = async () => {
  const { stdout } = await execPromisified('git branch --show-current');
  return stdout.trim();
};

const main = async () => {
  logStep('Starting to build Storybook - this might take a while');
  await buildStorybook();
  logStep('Storybook built');

  const branchName = await getBranchName();
  const demoPath = `${hdsDemoFolderPath}/${branchName}`;
  if (fs.existsSync(demoPath)) {
    logStep(`Folder already exists in ${demoPath}. Removing old folder`);
    fs.rmdirSync(demoPath, { recursive: true });
  }

  logStep('Starting to move files into demo folder');
  fs.cpSync(storybookPath, demoPath, { recursive: true });
  logStep(`Build files copied to demo folder: ${demoPath}`);

  /*

  // Commit steps do not work

  logStep('Preparing a commit to demo folder');
  await execPromisified(`cd ${hdsDemoFolderPath}`);
  logStep(`cd ${hdsDemoFolderPath}`);

  logStep('Pulling latest version from remote repo');
  const { stdout } = await execPromisified('pwd');
  logStep(stdout);

  logStep('Preparing a commit to demo folder');

  logStep('Adding new folder');
  await execPromisified(`git add ${branchName}`);

  logStep('Making a commit');
  await execPromisified(`git ci -m "Add new demo for ${branchName}"`);

  */

  logStep(
    `Visit hds-demo URL once you have committed the files and the build is ready. Address will be: ${hdsDemoURL}/${branchName}/`,
  );
};

main();
