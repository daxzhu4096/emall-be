/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:42:20+08:00
 * @Email:  daxzhu@126.com
 * @Filename: forgetCheckAnswer.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-10T16:45:49+08:00
 */
 const mongoose = require('../mongoose');
 const bcrypt = require('bcrypt');
 module.exports = async (ctx, next) => {
   const {username,question,answer} = ctx.request.body;

   await mongoose.User.findOne({username}).then((result) => {
     if (result.answer === answer) {
       ctx.body = {
         status: 0,
         data: bcrypt.hash(result._id,10).then(hash=>hash).catch(err=>err)
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
