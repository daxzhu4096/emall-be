/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T17:55:54+08:00
 * @Email:  daxzhu@126.com
 * @Filename: forgetResetPassword.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T20:12:04+08:00
 */
const mongoose = require('../mongoose');
const bcrypt = require('bcrypt');
module.exports = async (ctx, next) => {
  const { username, newPassword, token } = ctx.request.body;
  //验证token
  await bcrypt.compare(this._id, token).then(res => {
    if (res) {
      mongoose.User.updateOne({ name }, { $set: { password: newPassword } }).then(() => {
        ctx.body = {
          status: 0,
          msg: "密码修改成功"
        }
      });
    } else {
      ctx.body = {
        status: 1,
        msg: "无效的token"
      }
    }
  }).catch(err => {
    ctx.body = {
      status: 1,
      msg: "修改密码失败"
    }
  });

}
