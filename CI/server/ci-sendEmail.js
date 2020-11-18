//引入模块 nodemailer
const nodemailer = require('nodemailer')

const config = {
  // 163邮箱 为smtp.163.com
  host: 'smtp.qq.com',//这是qq邮箱
  //端口
  port: 465,
  auth: {
    // 发件人邮箱账号
    user: '1594636706@qq.com',
    //发件人邮箱的授权码 这里可以通过qq邮箱获取 并且不唯一
    pass: process.env.VA11_SMTP,
  }
}

const transporter = nodemailer.createTransport(config)

function mailMaker(subject='构建成功', recorder) {
  const records = recorder.getRecords();
  text = "";
  for (let i in records) {
    const job = records[i];
    text += `<li>${i} 用时: ${job.startTime - job.endTime}</li>`;
  }

  return {
    // 发件人 邮箱  '昵称<发件人邮箱>'
    from: '路过的甲同学<1594636706@qq.com>',
    // 主题
    subject,
    // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
    to: '945879305@qq.com',
    // 内容
    text: '',
    //这里可以添加html标签
    html: `<h1><ul>${text}</ul></h1>`,
  }
}

function sendEmail(mail){
  transporter.sendMail(mail, function(error, info){
      if(error) {
          return console.log(error);
      }
      transporter.close()
      console.log('mail sent:', info.response)
  })
}

module.exports = {
  sendEmail,
  mailMaker,
}
