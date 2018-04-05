/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-04T15:47:54+08:00
 * @Email:  daxzhu@126.com
 * @Filename: user.model.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T17:26:06+08:00
 */
const mongoose = require('mongoose');
const users = new mongoose.Schema({
  username: {
    type: String,
    unique: [true,"用户名已存在"],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: false,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  createTime: Date,
  lastLogin: Date
})
module.exports = mongoose.model("Users",users)
