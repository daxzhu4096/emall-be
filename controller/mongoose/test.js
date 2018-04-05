/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-04T15:06:30+08:00
 * @Email:  daxzhu@126.com
 * @Filename: script.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T17:29:30+08:00
 */
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = new koa();
const mongoose = require('../mongoose')
app.use(bodyParser());
router.get('/',async ctx =>{
  ctx.body = '<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>'
})
router.post('/register', async (ctx, next) => {
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
    if(err.code===11000){
      ctx.body = {
        status: 1,
        msg: "用户名已存在",
        err: err
      }
    }else{
      ctx.body = {
        status: 1,
        msg: err
      }
    }
  })
})
app.use(router.routes())
app.listen(8080, () => {
  console.log("this server is listening at port 8080")
})
