const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'slcaniob@can.io',
        subject: 'Gracias por registrarte!',
        text: `Bienvenido a la aplicación, ${name}. Hazme saber si te gusta.`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sebastian@can.io',
        subject: 'Eliminación de cuenta',
        text: `${name} tu cuenta ${email} ha sido eliminada, vuelve cuando quieras!.`
    });
}



module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}