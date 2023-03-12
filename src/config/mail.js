const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const {MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS} = process.env
const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: MAIL_USER, // your email
        pass: MAIL_PASS // your email password
    }
});

module.exports = transporter