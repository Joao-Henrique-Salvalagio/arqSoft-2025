import * as nodemailer from 'nodemailer'; 

export async function sendTestEmail(to: string, subject: string, htmlContent: string) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure, 
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const mailOptions = {
    from: '"Sistema de Gado" <no-reply@sistemagado.com>',
    to,
    subject,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);

  return nodemailer.getTestMessageUrl(info);
}
