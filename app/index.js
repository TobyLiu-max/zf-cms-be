const Koa = require('koa')
const koaBody = require('koa-body')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const app = new Koa()
const routing = require('./routes')
const { connectionStr } = require('./config')

mongoose.connect(connectionStr, { useNewUrlParser: true }, () =>
  console.log('MongoDB 连接成功了！')
)
mongoose.connection.on('error', console.error)

app.use(koaBody())
app.use(parameter(app))
routing(app)

app.listen(3000, () => console.log('程序启动在 3000 端口了'))
