const nodeMailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  let transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMPT_SERVICE,
    secure: false,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `inShare <${from}>`,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
  console.log(info);
}

module.exports = sendMail;
