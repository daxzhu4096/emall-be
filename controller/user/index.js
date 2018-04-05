/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T11:19:05+08:00
 * @Email:  daxzhu@126.com
 * @Filename: index.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-01T18:42:51+08:00
 */
const checkLogin          = require('./checkLogin');
const checkValid          = require('./checkValid');
const forgetCheckAnswer   = require('./forgetCheckAnswer');
const forgetGetQuestion   = require('./forgetGetQuestion');
const getUserInfo         = require('./getUserInfo');
const getInformation      = require('./getInformation');
const login               = require('./login');
const logout              = require('./logout');
const register            = require('./register');
const resetPassword       = require('./resetPassword');
const updateInformation   = require('./updateInformation');
const forgetResetPassword = require('./forgetResetPassword');
module.exports = {
  checkLogin,checkValid,forgetCheckAnswer,forgetGetQuestion,getUserInfo,getInformation,login,logout,register,resetPassword,updateInformation,forgetResetPassword
}
