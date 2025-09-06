import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { EmailDto } from './dtos/email.dto';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: 'true' === process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendEmail = async (EmailDto: EmailDto): Promise<boolean> => {
  try {
    const msg = {
      to: EmailDto.emailTo,
      from: EmailDto.emailFrom,
      subject: EmailDto.emailSubject,
      text: EmailDto.emailText,
      html: EmailDto.emailHtml,
      attachments: EmailDto.emailAttachments
    };
    return await transporter
      .sendMail(msg)
      .then(() => true)
      .catch(() => false);
  } catch (error) {
    return false;
  }
};
