const { mailMaker, sendEmail } = require('./ci-sendEmail.js');
const { childProcess, recorder } = require('./util.js');

class crossPlatformCommend {
  constructor() {
    const { platform } = process;
    this.npm = platform === 'win32' ? 'npm.cmd' : 'npm';
  }
}
const croPltCommend = new crossPlatformCommend();

process.on('uncaughtException', (err) => {
  const mail = mailMaker('构建失败', err);
  sendEmail(mail);
});

async function main() {
  recorder.recordStart('ALL');

  recorder.recordStart('INSTALL&BUILD');
  let [buildProcessErr, buildProcess] = await childProcess(croPltCommend.npm, ['run', 'start:server'], {cwd: '/test/VA11-shop'})
    .then((res) => [null, res])
    .catch((err) => [err, null]);
  if (buildProcessErr) {
    throw new Error('build error');
  }
  recorder.recordEnd('INSTALL&BUILD');

  recorder.recordEnd('ALL');

  let [sendProcessErr, sendProcess] = await new Promise((resolve, reject) => {
    const mail = mailMaker('构建成功', recorder);
    sendEmail(mail);
  });
  if (sendProcessErr) {
    throw new Error('send email error');
  }
}

main();
