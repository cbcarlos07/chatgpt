const InputPrompt = require('../model/input-model')
const openai = require('../config/openai')
const prompService = data => {
    return new Promise(async (resolve, reject)=>{

        const openaiAI = openai.configuration();
            const inputModel = new InputPrompt(data)
            try {
                const response = await openaiAI.createCompletion(
                    openai.textCompletion(inputModel)
                )
                resolve({
                    success: true,
                    data: response.data.choices[0].text
                })
            } catch (error) {
                reject({
                    success: false,
                    error: error.response ? error.response.data : 'Tem erro no servidor'
                })
            }
    })
}

module.exports = prompService