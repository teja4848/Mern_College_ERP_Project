const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sender-mail', // your Gmail address
            pass: 'app pass'      // your App Password or Gmail password
        }
    });

    let info = await transporter.sendMail({
        from: '"user" <sender-mail>',
        to: 'reciever-mail', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
}

sendEmail().catch(console.error);
