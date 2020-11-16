const koa = require('koa');
const app = new koa();

const { deleteFolder, childProcess } = require('./util.js');

const has  = Object.hasOwnProperty;

function responseFetch(ctx, next) {
  ctx.body = { status: "sucess" };
  next();
}

async function main(ctx) {
  // TODO 也许可以有些其他操作
  if (!has.call(ctx.query, 'push') || ctx.query['push'] !== 'DONE') {
    return false;
  }

  console.log('ci start');

  try {
    // 如上次构建失败未删除，clone会受阻
    console.log('remove old git repository');
    let [removeProcessErr, removeProcess] = await deleteFolder('/test/VA11-shop')
      .then((res) => [null, res])
      .catch((err) => [err, null]);
    if (removeProcessErr) {
      throw new Error('remove error');
    }

    console.log('clone start');
    let [cloneGitErr, cloneGit] = await childProcess('git', ['clone', 'https://github.com/passby6someone/VA11-shop.git'], { cwd: '/test' })
      .then((res) => [null, res])
      .catch((err) => [err, null]);
    if (cloneGitErr) {
      console.log(cloneGitErr);
      throw new Error('clone error');
    }

    console.log('install start');
    let [installProcessErr, installProcess] = await childProcess('npm', ['run', 'install:CI'], {cwd: '/test/VA11-shop'})
      .then((res) => [null, res])
      .catch((err) => [err, null]);
    if (installProcessErr) {
      throw new Error('install error');
    }

    console.log('ci jobs start');
    let [ciJobsErr, ciJobs] = await childProcess('node', ['/test/VA11-shop/CI/server/ci-jobs.js'])
      .then((res) => [null, res])
      .catch((err) => [err, null]);
    if (ciJobsErr) {
      console.log(ciJobsErr);
      throw new Error('ciJobs error');
    }
  } catch (error) {
    console.log(error)
  }

  console.log('everything done');
}

app.use(responseFetch);
app.use(main);

app.listen(9527, () => console.log('server start'))
