const userRep = require('../repository/UserRepository')
module.exports = {
    create: data => {
        return userRep.create(data)
    },
    all: () => {
        return userRep.findAll()
    }
}    