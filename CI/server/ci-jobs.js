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
  let [buildProcessErr, buildProcess] = await childProcess(croPltCommend.npm, ['run', 'build'], {cwd: './VA11-shop'})
    .then((res) => [null, res])
    .catch((err) => [err, null]);
  if (buildProcessErr) {
    throw new Error('build error');
  }

  let [moveProcessErr, moveProcess] = await new Promise((resolve, reject) => {
    try {
      if (fs.existsSync('/test/VA11-shop') && fs.statSync('/test/VA11-shop').isDirectory()) {
        childProcess('rm', ['-rf', '/test/VA11-shop']).then(() => fs.renameSync('/test/VA-11-CI/VA11-shop', '/test/VA11-shop'));
        resolve();
      }
      fs.renameSync('/test/VA-11-CI/VA11-shop', '/test/VA11-shop');
      resolve();
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
