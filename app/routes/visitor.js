const Router = require('koa-router')
const router = new Router({ prefix: '/visitor' })
const { find, create } = require('../controllers/visitor')

router.get('/', find)
router.post('/', create)

module.exports = router
