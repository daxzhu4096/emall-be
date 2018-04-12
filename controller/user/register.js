/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:40:19+08:00
 * @Email:  daxzhu@126.com
 * @Filename: register.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-10T16:37:24+08:00
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

  const User = new mongoose.User({
    username,
    password,
    question,
    answer,
    phone,
    email,
    createTime: Date.parse(new Date())
  });
  /* mongoose.User.findOne({username}).then(result=>{
    if(result){
      ctx.body = {
        status: 1,
        msg: "用户名以被占用"
      }
    }else{
      User.save(function(err){
        if(err) throw err;
        ctx.body = {
          status: 0,
          msg: '注册成功'
        }
      })
    }
  }).catch(err=>{
    ctx.body = {
      status: 1,
      msg: '注册失败',
      err: err
    }
  }) */
  User.save(function (err) {
    if (err) {
      ctx.body = {
        status: 1,
        msg: "用户名以被占用"
      }
    } else {
      ctx.body = {
        status: 0,
        msg: '注册成功'
      }
    }
  });
}
