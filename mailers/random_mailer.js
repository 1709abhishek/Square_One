const nodeMailer = require('../config/nodemailer');





exports.newMail = (mail) => {
    console.log("inside newMail mailer");
    console.log(mail);

    nodeMailer.transporter.sendMail({
        from: '1709abhishek@gmail.com',
        to: mail.email,
        subject: "Password reset success",
        html: '<h1> Remember your new password! </h1> <h3> here is the link </h3> <a href="http://localhost:8000/users/reset-password">'
    }, (err, info) => {
        if (err) {
            console.log('error in sending mail', err);
            return;
        }
        console.log('message sent', info);
        return;
    });
}

exports.newForgot = (mail, data) => {
    console.log("inside newMail mailer");
    console.log(mail);
    let url = "http://localhost:8000/users/reset-password?token=" + data.token;

    console.log(url);
    nodeMailer.transporter.sendMail({
        from: '1709abhishek@gmail.com',
        to: mail.email,
        subject: "Password reset link success",
        html: "<h1> {{url}} </h1>",
        context: {
            url: 'http://localhost:8000/users/reset-password?token=' + data.token
        }
    }, (err, info) => {
        if (err) {
            console.log('error in sending mail', err);
            return;
        }
        console.log('message sent', info);
        return;
    });
}
