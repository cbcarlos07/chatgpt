const User = require('../model/User')

class UserRepository {
    create(data) {
        return User.create(data)
    }

    findAll(){
        return User.find()
    }

    findOne(data){
        return User.findOne(data, {password: 0})
    }

    pushMessage(_id, message){
        return User.findByIdAndUpdate({_id}, {$push: {message}})
    }

    find(_id){
        return User.findOne({_id});
    }
}

module.exports = new UserRepository