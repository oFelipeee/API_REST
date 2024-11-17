const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendNotification = async (email, message) => {
    const transporter = nodemailerailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Notificação de Transação',
        text: message
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendNotification;
