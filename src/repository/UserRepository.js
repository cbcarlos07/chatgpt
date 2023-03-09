const User = require('../model/User')

class UserRepository {
    create(data) {
        return User.create(data)
    }

    findAll(){
        return User.find()
    }
}

module.exports = new UserRepository