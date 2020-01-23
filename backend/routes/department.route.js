const router = require('express').Router()
const controller = require('../controllers/department.controllers')
const validator = require('../validators/department.validator')


router.get('/', controller.getAll)
router.get('/:id', validator.getEmployees, controller.getEmployees )
router.get('/:id', controller.getOne)
router.post('/', validator.createOne, controller.createOne)
router.put('/:id', validator.createOne, controller.updateAllFields)
router.patch('/:id', validator.createOne, controller.updateSomeFields)
router.delete('/:id', controller.deleteOne)

module.exports = router