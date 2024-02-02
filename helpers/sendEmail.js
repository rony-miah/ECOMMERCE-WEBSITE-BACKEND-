const nodemailer = require("nodemailer");

async function sendEmail(email, subject, template) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rony.mkt25@gmail.com",
            pass: "wjlcibcmctyzahro",
        },
    });

    const info = await transporter.sendMail({
        from: "OREBI", // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        // text: "Hello world?", // plain text body
        html: template, // html body
      });
}

module.exports = sendEmail;