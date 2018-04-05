/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:42:40+08:00
 * @Email:  daxzhu@126.com
 * @Filename: getInformation.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T20:14:03+08:00
 */
const mongoose = require('../mongoose')
module.exports = async (ctx, next) => {
  const {username} = ctx.request.body;

  await mongoose.User.findOne({username}).then((result) => {
    if (result) {
      ctx.body = {
        status: 1,
        msg: '用户已存在'
      }
    } else {
      ctx.body = {
        status: 0,
        msg: '校验成功'
      }
    }
  }).catch((err) => {
    ctx.body = {
      status: 1,
      msg: err
    }
  })
}
