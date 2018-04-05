/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:40:55+08:00
 * @Email:  daxzhu@126.com
 * @Filename: forgetGetQuestion.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T20:03:18+08:00
 */
 const mongoose = require('../mongoose')
 module.exports = async (ctx, next) => {
   const {username} = ctx.request.body;

   await mongoose.User.findOne({username}).then((result) => {
     if (!result) {
       ctx.body = {
         status: 1,
         msg: '用户不存在'
       }
     } else {
       ctx.body = {
         status: 0,
         data: result.question
       }
     }
   }).catch((err) => {
     ctx.body = {
       status: 1,
       msg: err
     }
   })
 }
