const md5 = require('md5')
const jwt = require('jsonwebtoken')
const userRep = require('../repository/UserRepository')
const JWT_SECRET = process.env.JWT_SECRET
module.exports = {
    create: data => {
        return new Promise(async(resolve, reject)=>{
            const user = await userRep.findOne({email: data.email})
            
            if( user ){
                reject(
                    {
                        errors: 
                            {
                                email: {
                                    properties: {message: 'E-mail já cadastrado'}
                                }
                            }
                        , 
                        status: false
                    })
            }else{
                data.password = md5(data.password)
                const resp = await userRep.create(data)
                delete resp.password
                const obj = {name: resp.name, email: resp.email, _id: resp._id}
                const token = jwt.sign( obj, JWT_SECRET, { expiresIn: 60 * 60 * 24 }  )
                resolve({data: obj, token, status: true})
            }
        })
    },
    all: () => {
        return userRep.findAll()
    },
    findOne(data){
        return userRep.auth(data)
    },
    auth: data => {
        return new Promise(async(resolve, reject)=>{
            data.password = md5(data.password)
            const resp = await userRep.findOne(data) || undefined
            let status = 400
            let token = undefined
            let msg = 'Login ou senha inválidos'
            if( resp ){
                status = 200
                const obj = {name: resp.name, email: resp.email, _id: resp._id}
                token = jwt.sign( obj, JWT_SECRET, { expiresIn: 60 * 60 * 24 }  )
                msg = undefined
            }
            resolve({status, resp, token, msg})

        })
    },

    pushMessage: data => {
        return userRep.pushMessage(data.id, data.message)        
        
    },

    findById(id){
        return userRep.find(id)
    }
}    