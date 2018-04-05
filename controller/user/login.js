/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:38:34+08:00
 * @Email:  daxzhu@126.com
 * @Filename: login.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T19:52:55+08:00
 */
const mongoose = require('../mongoose')
module.exports = async (ctx, next) => {
  const {username, password} = ctx.request.body;

  await mongoose.User.findOne({username}).then((result) => {
    if (!result) {
      ctx.body = {
        status: 1,
        msg: '该用户未注册'
      }
    } else if (result.password === password) {
      ctx.body = {
        status: 0,
        data: {
          _id: result._id,
          username: username,
          email: result.email,
          phone: result.phone,
          createTime: result.createTime,
          lastLogin: result.lastLogin
        }
      }
    } else {
      ctx.body = {
        status: 1,
        msg: '密码错误'
      }
    }
  }).catch((err) => {
    ctx.body = {
      status: 1,
      msg: err
    }
  })
  await mongoose.User.updateOne({username},{$set: {lastLogin: Date.parse(new Date())}}).catch(err=>{console.log(err)})
}
