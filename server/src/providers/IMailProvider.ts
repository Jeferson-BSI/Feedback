export interface SendEmailData {
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendEmail(data: SendEmailData): Promise<void>
}