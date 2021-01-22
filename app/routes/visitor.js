const Router = require('koa-router')
const router = new Router({ prefix: '/visitor' })
const { find, create, del, update } = require('../controllers/visitor')

router.get('/', find)
router.post('/', create)
router.delete('/:id', del)
router.patch('/:id', update)

module.exports = router
