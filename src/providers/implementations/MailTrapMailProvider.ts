import nodemailer from 'nodemailer'
import { IMailProvider, IMessage } from '@providers/interfaces/IMailProvider'

export class MailTrapMailProvider implements IMailProvider {
  private transporter

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'd111e4f667035f',
        pass: 'c7ab92c11ab404'
      }
    })
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
