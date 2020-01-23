const router = require('express').Router()
const controller = require('../controllers/employee.controller')
const validator = require('../validators/employee.validator')


router.get('/', controller.getAll)

router.get('/:id', controller.getOne)
router.post('/',validator.createOne, controller.createOne)
router.put('/:id', validator.createOne,controller.updateAllFields)
router.patch('/:id',validator.createOne, controller.updateSomeFields)
router.delete('/:id', controller.deleteOne)

module.exports = router