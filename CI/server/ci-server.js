const child_process = require('child_process');
const koa = require('koa');
const app = new koa();

const has  = Object.hasOwnProperty;

class crossPlatformCommend {
  constructor() {
    const { platform } = process;
    this.npm = platform === 'win32' ? 'npm.cmd' : 'npm';
  }
}

const croPltCommend = new crossPlatformCommend();

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

function responseFetch(ctx, next) {
  ctx.body = { status: "sucess" };
  next();
}

async function main(ctx) {
  // TODO 也许可以有些其他操作
  if (!has.call(ctx.query, 'push') || ctx.query['push'] !== 'DONE') {
    return false;
  }

  childProcess('node', ['./VA11-shop/CI/server/ci-jobs.js']);

  try {
    let [cloneGitErr, cloneGit] = await childProcess('git', ['clone', 'https://github.com/passby6someone/VA11-shop.git'])
      .then((res) => [null, res])
      .catch((err) => [err, null]);
    if (cloneGitErr) {
      console.log(cloneGitErr);
      throw new Error('clone error');
    }

    let [ciJobsErr, ciJobs] = await childProcess('node', ['./VA11-shop/CI/server/ci-jobs.js'])
      .then((res) => [null, res])
      .catch((err) => [err, null]);
    if (ciJobsErr) {
      console.log(ciJobsErr);
      throw new Error('ciJobs error');
    }
  } catch (error) {
    console.log(error)
  }
}

app.use(responseFetch);
app.use(main);

app.listen(9527, () => console.log('server start'))
