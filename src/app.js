const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const init = require('./routes/initRoutes')
const userRoutes = require('./routes/userRoutes')
const jwtMiddleware = require('./utils/jwtMiddleware')
const connect = require('./config/mongo')
const connectdb = async() => {
     connect()
        .then(() => console.log('Conectou'))
        .catch(err => console.error('Nao conectou'))
}

const app = express()
connectdb()
app.use(express.json())
app.use(cors())
const exclusions =['/', '/auth']
app.use(jwtMiddleware({exclusions}))
app.use(routes)
app.use(init)
app.use('/user', userRoutes)

module.exports = app