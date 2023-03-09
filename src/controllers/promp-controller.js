const InputPrompt = require('../model/input-model')
const openai = require('../config/openai')
module.exports = {
    async sendText(req, res){
        const openaiAI = openai.configuration();
        const inputModel = new InputPrompt(req.body)
        try {
            const response = await openaiAI.createCompletion(
                openai.textCompletion(inputModel)
            )
            return res.status(200).json({
                success: true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.response ? error.response.data : 'Tem erro no servidor'
            })
        }

        response.status(200).json({msg: 'Send texto'})
    }
}