import  nodemailer from 'nodemailer';
import { IMailProvider, SendEmailData } from "../IMailProvider";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: { 
    user: "351e17c143cee7",
    pass: "ae8be8931d173e"
  }
});


class NodemailerMailProvider implements IMailProvider {

  async sendEmail({subject, body}: SendEmailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: "Jeferson <jeferson@gmail.com>",
      subject,
      html: body
    })
  }
};

export { NodemailerMailProvider };