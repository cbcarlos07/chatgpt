const mailService = require('../service/mailService')

module.exports = {
    send(req, res){

        mailService(req.body)
        res.status(200).json({msg: 'Seu e-mail está sendo processado...'})
    }
}