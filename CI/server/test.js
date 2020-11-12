
const { deleteFolder, childProcess } = require('./util.js');

async function main() {
  await deleteFolder('CI/server/test');
  console.log('done');
}

main();
