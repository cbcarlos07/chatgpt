const express = require('express')

const promptController = require('../controllers/promp-controller')
const userController = require('../controllers/user-controller')
const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)
routes.patch('/auth', userController.auth)

module.exports = routes