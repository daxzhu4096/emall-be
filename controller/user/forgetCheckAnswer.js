/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:42:20+08:00
 * @Email:  daxzhu@126.com
 * @Filename: forgetCheckAnswer.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T20:12:08+08:00
 */
 const mongoose = require('../mongoose')
 module.exports = async (ctx, next) => {
   const {username,question,answer} = ctx.request.body;

   await mongoose.User.findOne({username}).then((result) => {
     if (result.answer === answer) {
       ctx.body = {
         status: 0,
         data: '' //token
       }
     } else {
       ctx.body = {
         status: 1,
         msg: '问题答案错误'
       }
     }
   }).catch((err) => {
     ctx.body = {
       status: 1,
       msg: err
     }
   })
 }
