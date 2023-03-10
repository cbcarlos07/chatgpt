
const mongoose = require('mongoose')
 
const connect = () => {
    
    const db_url = process.env.MONGO_URL
    const DB_URL = db_url
    
    return mongoose.connect(DB_URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //useCreateIndex: true, //make this true
        autoIndex: true, //make this also true
    })
}

module.exports = connect