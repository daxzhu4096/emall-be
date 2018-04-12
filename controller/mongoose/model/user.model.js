/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-04T15:47:54+08:00
 * @Email:  daxzhu@126.com
 * @Filename: user.model.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-10T16:24:43+08:00
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const users = new mongoose.Schema({
  username: {
    type: String,
    unique: [
      true, "用户名已存在"
    ],
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
users.pre('save', next => {
  const user = this;
  const SALT_FACTOR = 10;
  bcrypt.hash(user.password, SALT_FACTOR, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next()
  });
});
users.methods.comparePassword = function (password, cb) {
  // 对比
  bcrypt.compare(password, this.password,function(err,result){
    if(err) throw err;
    cb(null,result)
  })
}
module.exports = mongoose.model("Users", users)
