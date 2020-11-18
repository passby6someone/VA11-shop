const fs = require('fs');
const child_process = require('child_process');

// 递归删除文件夹
function deleteFolder (rootPath) {
  return new Promise((resolve, reject) => {
    const recursionDelete = (path) => {
      try {
        var files = [];
        if (fs.existsSync(path)) {
          files = fs.readdirSync(path);
          files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
              recursionDelete(curPath);
            } else { // delete file
              fs.unlinkSync(curPath);
            }
          });
          fs.rmdirSync(path);
        }
      } catch (err) {
        reject(err);
      }
      if (path === rootPath) {
        resolve();
      }
    }
    recursionDelete(rootPath);
  });
}

function childProcess (...commend) {
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

class recordExecTime {
  constructor () {
    this.data = {};
  }

  recordStart(jobName) {
    if (this.data.hasOwnProperty(jobName)) {
      return false;
    }

    this.data[jobName] = {
      startTime: new Date(),
      endTime: null,
    }

    return true;
  }

  recordEnd(jobName) {
    if (!this.data.hasOwnProperty(jobName)) {
      return false;
    }

    this.data[jobName].endTime = new Date();

    return true;
  }

  getRecords() {
    return this.data;
  }
}

const recorder = new recordExecTime();

module.exports = {
  deleteFolder,
  childProcess,
  recorder,
}
