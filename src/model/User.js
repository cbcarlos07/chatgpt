const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Nome é obrigatório']
        },
        email: {
            type: String, 
            unique: true,
            required: [true,'E-mail é obrigatório'],
        },
        password: {
            type: String,
            required: true
        },
        message: [
                {
                    question: String, 
                    answer: String
                }]
    }
)

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User