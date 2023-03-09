const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {type: String},
        email: {type: String},
        password: {type: String},
        message: [
                {
                    question: String, 
                    answer: String
                }]
    }
)

module.exports = mongoose.model('user', UserSchema )