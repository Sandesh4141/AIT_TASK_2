
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sandeshjan47@gmail.com',
        pass: 'Sandesh@jan474747'
    }
});


let mailOptions = {
    from: 'your_email@gmail.com',
    to: ' sandeshpawar414141@gmail.com',
    subject: 'Demo purpose',
    text: 'This mail is sent for demo purpose'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
