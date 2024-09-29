const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'tejaanumolu70@gmail.com', // your Gmail address
            pass: 'nfoc cxgb dnws llxh'      // your App Password or Gmail password
        }
    });

    let info = await transporter.sendMail({
        from: '"teja" <tejaanumolu70@gmail.com>',
        to: 'tejaanumolu16@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
}

sendEmail().catch(console.error);
