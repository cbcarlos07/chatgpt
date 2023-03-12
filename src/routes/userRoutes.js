const express = require('express')
const route = express.Router()
const userController = require('../controllers/user-controller')

route.post('/create', userController.create)
route.get('/', userController.all)
route.get('/:id', userController.findById)


module.exports = route