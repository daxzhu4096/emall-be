/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-04T15:36:55+08:00
 * @Email:  daxzhu@126.com
 * @Filename: mongoose.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T16:16:25+08:00
 */
const mongoose = require('mongoose');
const config = require('./config');
const Users = require('./model/user.model')

module.exports = async () => {
  return mongoose.connect(config.url)
}
