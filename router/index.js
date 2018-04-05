/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:15:46+08:00
 * @Email:  daxzhu@126.com
 * @Filename: index.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-01T18:44:08+08:00
 */
const router = require('koa-router')();
const controller = require('../controller/user/index')
module.exports = (app) => {
  router.get("/",async(ctx,next)=>{
    ctx.body = `<h1>Hello World</h1>
    <script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>`
  })
  // 检查用户名是否存在
  router.post('/user/check_valid',controller.checkValid)
  // 检查登陆状态
  router.post('/user/get_user_info',controller.checkLogin)
  // 用户登陆
  router.post('/user/login',controller.login)
  // 用户注册
  router.post('/user/register',controller.register)
  // 忘记密码时获取密码提示问题
  router.post('/user/forget_get_question',controller.forgetGetQuestion)
  // 检查密码提示问题答案是否正确
  router.post('/user/forget_check_answer',controller.forgetCheckAnswer)
  // 重置密码
  router.post('/user/forget_reset_password',controller.forgetResetPassword)
  // 获取用户信息
  router.post('/user/get_information',controller.getInformation)
  // 更新用户信息
  router.post('/user/update_information',controller.updateInformation)
  // 登录状态下 重置密码
  router.post('/user/reset_password',controller.resetPassword)
  // 退出登录
  router.post('/user/logout',controller.logout)
  app.use(router.routes()).use(router.allowedMethods())
}
