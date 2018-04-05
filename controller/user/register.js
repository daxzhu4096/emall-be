/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:40:19+08:00
 * @Email:  daxzhu@126.com
 * @Filename: register.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T19:17:12+08:00
 */
const mongoose = require('../mongoose')
module.exports = async (ctx, next) => {
  const {
    username,
    password,
    question,
    answer,
    phone,
    email
  } = ctx.request.body;

  await mongoose.User.create({
    username,
    password,
    question,
    answer,
    phone,
    email,
    createTime: Date.parse(new Date())
  }).then(() => {
    ctx.body = {
      status: 0,
      msg: '注册成功'
    }
  }).catch((err) => {
    if (err.code === 11000) {
      ctx.body = {
        status: 1,
        msg: "用户名已存在",
        err: err
      }
    } else {
      ctx.body = {
        status: 1,
        msg: err
      }
    }
  })
}
