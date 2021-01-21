const Router = require('koa-router')
const router = new Router({ prefix: '/visitor' })
const { find, create, del } = require('../controllers/visitor')

router.get('/', find)
router.post('/', create)
router.delete('/:id', del)

module.exports = router
