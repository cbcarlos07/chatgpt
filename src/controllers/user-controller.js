const userService = require('../service/userService')

module.exports = {
    create(req, res){
        userService
         .create(req.body)
         .then(data => {
            res.status(200).json({msg: 'Registro feito com sucesso!', data})
         })

    },

    all(req, res){
        userService
            .all()
            .then(data => {
                res.status(200).json(data)
            })
    }
}