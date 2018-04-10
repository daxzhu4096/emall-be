/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-04T15:06:30+08:00
 * @Email:  daxzhu@126.com
 * @Filename: script.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-10T16:41:41+08:00
 */
const bcrypt = require('bcrypt');
bcrypt.hash('nihaoma',10).then(hash=>hash)
