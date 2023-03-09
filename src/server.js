const app = require('./app')

const SERVER_PORT = process.env.SERVER_PORT || 5000

app.listen(SERVER_PORT, () =>{
    console.log(`API listening on port ${SERVER_PORT}`);
})