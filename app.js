/**
 * @Author: GengPeng Zhu
 * @Date:   2018-04-01T10:15:01+08:00
 * @Email:  daxzhu@126.com
 * @Filename: app.js
 * @Last modified by:   GengPeng Zhu
 * @Last modified time: 2018-04-01T11:12:42+08:00
 */
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new koa();
const router = require('./router')

app.use(bodyParser());
router(app)

app.listen(8080,()=>{
  console.log("this server is listening at port 8080")
})
