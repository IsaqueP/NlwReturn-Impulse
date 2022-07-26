import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31acbe4facc5e8",
    pass: "031b84446a75fe"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData){

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Isaque Pinheiro <isaquepinheiro2002@gmail.com>',
      subject,
      html: body,
    })
  }
}