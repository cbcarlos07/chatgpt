
const mongoose = require('mongoose')
 
const connect = () => {
    const host = process.env.MONGO_HOST
    const port = process.env.MONGO_PORT
    const database = process.env.MONGO_DATABASE
    const DB_URL = `mongodb://${host}:${port}/${database}`
    
    return mongoose.connect(DB_URL)
}

module.exports = connect