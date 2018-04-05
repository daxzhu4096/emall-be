/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T17:23:04+08:00
 * @Email:  daxzhu@126.com
 * @Filename: test.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T13:54:45+08:00
 */
// const mongo = require('./node_modules/mongodb')
const koa = require('koa')
const app = new koa()
const router = require("koa-router")()
const fs = require('fs')
// const nodemailer = require('nodemailer');
// var config = {
//   host: 'smtp.office365.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'charlieechu@hotmail.com',
//     pass: 'Daxzhu_4096'
//   }
//
// };
// var transporter = nodemailer.createTransport(config);
//
// // 发送邮件
// module.exports = async send(mail) {
//   transporter.sendMail(mail, function(error, info) {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('mail sent:', info.response);
//   });
// };
// send({from: "春雨里洗过的太阳<charlieechu@hotmail.com>", subject: '测试', to: "daxzhu@126.com", html: "<h1>点击链接激活账户</h1>"})
// mongo

router.get('/',async(ctx,next)=>{

    ctx.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
    </html>
`

})
app.use(router.routes())
app.listen(3000)
