const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sebastian@can.io',
        subject: 'Thanks for joining in!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sebastian@can.io',
        subject: 'Cancelation',
        text: `${name} you account ${email} has been removed.Why?.`
    });
}



module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}