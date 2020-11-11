const child_process = require('child_process');
const fs = require('fs');

function childProcess(...commend) {
  return new Promise((resolve, reject) => {
    childPro = child_process.spawn(...commend);
    successChunk = [];
    errorChunk = [];
    childPro.stdout.on('data', (data) => successChunk.push(data));
    childPro.stdout.on('end', () => {
      if (successChunk.length !== 0) {
        resolve(successChunk.join('').toString());
      }
    });

    childPro.stderr.on('data', (data) => errorChunk.push(data));
    childPro.stderr.on('end', () => {
      if (errorChunk.length !== 0) {
        reject(errorChunk.join('').toString());
      }
    });

    childPro.on('error', (err) => reject(err));
    childPro.on('close', (code) => resolve(code));
  });
}

class crossPlatformCommend {
  constructor() {
    const { platform } = process;
    this.npm = platform === 'win32' ? 'npm.cmd' : 'npm';
  }
}
const croPltCommend = new crossPlatformCommend();

async function main() {
  console.log('run build');
  let [buildProcessErr, buildProcess] = await childProcess(croPltCommend.npm, ['run', 'build'], {cwd: '../../'})
    .then((res) => [null, res])
    .catch((err) => [err, null]);
  if (buildProcessErr) {
    throw new Error('build error');
  }

  console.log('run move file');
  let [moveProcessErr, moveProcess] = await new Promise((resolve, reject) => {
    try {
      let status = fs.statSync('/test/VA11-shop');
      if (status.isDirectory()) {
        fs.rmdirSync('/test/VA11-shop');
        fs.renameSync('/test/VA-11-CI/VA11-shop', '/test/VA11-shop');
        fs.rmdirSync('/test/VA-11-CI/VA11-shop');
        resolve();
      }
    } catch (err) {
      reject(err);
    }
  })
    .then((res) => [null, res])
    .catch((err) => [err, null]);
  if (moveProcessErr) {
    throw new Error('move file error');
  }
}

main();
