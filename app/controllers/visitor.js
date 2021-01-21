const Visitor = require('../models/visitor')

class VisitorCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query
    const page = Math.max(ctx.query.page * 1, 1) - 1
    const perPage = Math.max(per_page * 1, 1)
    const q = new RegExp(ctx.query.q)
    try {
      const data = await Visitor.find({
        $or: [{ guestName: q }, { siteName: q }]
      })
        .limit(perPage)
        .skip(page * perPage)
      ctx.body = {
        code: 200,
        message: '成功',
        data: data
      }
    } catch (error) {
      console.log('error', error)
      ctx.body = {
        code: 500,
        message: '服务错误'
      }
    }
  }
  async create(ctx) {
    ctx.verifyParams({
      guestName: { type: 'string', required: true },
      mobileNumber: { type: 'string', required: true },
      personNum: { type: 'string', required: true },
      visitTime: { type: 'string', required: true },
      siteName: { type: 'string', required: true }
    })
    const body = ctx.request.body
    body.visitTime = +body.visitTime
    const visitor = await new Visitor(body).save()
    ctx.body = visitor
  }
  async del(ctx) {
    ctx.verifyParams({
      id: { type: 'string', required: true }
    })
    try {
      const data = await Visitor.findByIdAndRemove(ctx.params.id)
      ctx.body = {
        code: 200,
        message: '成功',
        data: data
      }
    } catch (error) {
      ctx.body = {
        code: 500,
        message: '服务错误'
      }
    }
  }
}

module.exports = new VisitorCtl()
