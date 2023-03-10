const InputPrompt = require('../model/input-model')
const openai = require('../config/openai')
const userService = require('./userService')
const prompService = data => {
    return new Promise(async (resolve, reject)=>{

        const openaiAI = openai.configuration();
            const {prompt} = data
            const inputModel = new InputPrompt({prompt})
            try {
                const response = await openaiAI.createCompletion(
                    openai.textCompletion(inputModel)
                )
                const text = response.data.choices[0].text
                const user = {
                        id: data.id, 
                        message: {
                            question: data.prompt,
                            answer: text
                        }
                    }
                userService.pushMessage(user)
                resolve({
                    success: true,
                    data: text
                })
            } catch (error) {
                console.log('chatgpt', error);
                reject({
                    success: false,
                    error: error.response ? error.response.data : 'Tem erro no servidor'
                })
            }
    })
}

module.exports = prompService