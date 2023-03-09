const express = require('express')

const routes = express.Router()

routes.get('/', (req, res)=>{
    res.json({msg: 'API ChatGPT'})
})

module.exports = routes