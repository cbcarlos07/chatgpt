const express = require('express')
const route = express.Router()
const mailController = require('../controllers/mail-controller')

route.patch('/mail', mailController.send)


module.exports = route