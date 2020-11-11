console.log('start');

const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

const has = Object.hasOwnProperty;

let sendStatus = new Promise((resolve, reject) => {
  const target = core.getInput('target');
  const type = core.getInput('type');
  const status = core.getInput('status');
  console.log(`target: http://${target}?${type}=${status}`);
  axios.get(`http://${target}?${type}=${status}`)
    .then((res) => {
      console.log('get success')
      if (has.call(res, 'status') && res.status === 'success') {
        resolve();
      }
    })
    .catch((err) => reject(err));
});

sendStatus
  .then(() => {
      const payload = JSON.stringify(github.context.payload, undefined, 2);
      console.log(`The event payload: ${payload}`);
      core.setOutput("time", (new Date()).toTimeString())
    })
  .catch(() => core.setFailed(error.message));