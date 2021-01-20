const Visitor = require('../models/visitor')

class VisitorCtl {
  async find(ctx) {
    const { per_page = 10 } = ctx.query
    const page = Math.max(ctx.query.page * 1, 1) - 1
    const perPage = Math.max(per_page * 1, 1)
    const q = new RegExp(ctx.query.q)
    ctx.body = await Visitor.find({ $or: [{ guestName: q }, { siteName: q }] })
      .limit(perPage)
      .skip(page * perPage)
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
    const visitor = await new Visitor(body).save()
    ctx.body = visitor
  }
}

module.exports = new VisitorCtl()
