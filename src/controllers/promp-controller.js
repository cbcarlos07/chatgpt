const prompService = require('../service/prompt-service')
module.exports = {
    sendText(req, res){
        prompService(req.body)
            .then(data => {
                res.status(200).json(data)
            }).catch(err => {
                res.status(404).json(err)
            })
    }
}