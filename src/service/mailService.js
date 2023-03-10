const fs = require('fs');
const handlebars = require('handlebars')
const path = require('path')
const userService = require('../service/userService')
const transporter = require('../config/mail')

const mailOptions = {
    from: '"Carlos Bruno" <cbcarlos07@gmail.com>', // sender address
    to: 'recipient@example.com', // list of receivers
    subject: 'Resposta ChatGTP', // Subject line
    //text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};
const pwd = path.resolve('src','template','template.html')
var source   = fs.readFileSync(pwd,'utf8').toString();
var template = handlebars.compile(source);
const sendEmail = async data => {
    const us = await userService.findById(data.user)
    const message = us.message.find(m => m._id == data.id)
    const content = template({question: message.question, text: message.answer })
    mailOptions.to = us.email
    mailOptions.html = content
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail