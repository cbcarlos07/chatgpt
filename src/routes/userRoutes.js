const express = require('express')
const route = express.Router()
const userController = require('../controllers/user-controller')

route.post('/', userController.create)
route.get('/', userController.all)

module.exports = route