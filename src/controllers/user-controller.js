const { findById } = require('../model/User')
const userService = require('../service/userService')

module.exports = {
    create(req, res){
        userService
         .create(req.body)
         .then(data => {
            res.status(200).json({msg: 'Registro feito com sucesso!', response: data})
         }).catch(err => {
            const keys = Object.keys(err.errors).map(e => {
                return err.errors[e].properties.message
            })
            res.status(500).json({msg: 'Ops!', errors: keys})
          }
        )

    },

    all(req, res){
        userService
            .all()
            .then(data => {
                res.status(200).json(data)
            })
    },

    auth(req, res){
        userService
            .auth(req.body)
            .then(resp => {
                res.status(resp.status).json(resp)   
            })
    },

    findById(req, res){
        const {id} = req.params
        userService
            .findById(id)
            .then(data => {
                res.json(data)
            })
    }
}