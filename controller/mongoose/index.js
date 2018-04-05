/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-04T16:14:26+08:00
 * @Email:  daxzhu@126.com
 * @Filename: index.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-04T21:56:40+08:00
 */
require('./mongoose')().then(()=>{
  console.log('success')
}).catch(err=>{
  console.log(err)
});
const User = require('./model/user.model');

module.exports = {
  User
}
