import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: Request) {
  const body = await req.json();
    
  if (typeof body === 'string') {
    // TODO: write review request email
  //  return  sendReviewEmail(body);  
  }

  const { email } = body; 

  if (!email) {
    return await sendRatingEmail(body);
  }

  return await sendContactEmail(body);
}

const sendEmail = async (text: string, subject: string, to = process.env.EMAIL) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject, //  || email ? `Message from ${name} (${email})` : `Rating Email`,
    text,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err);
        }
      });
    });

  try {
    if (!process.env.EMAIL) return NextResponse.json({ error: 'Missing Env Vars' }, { status: 500 });

    return await sendMailPromise()
      .then(() => NextResponse.json({ message: 'Email Sent' }, { status: 200 }))
      .catch(error => {
        return NextResponse.json({ error }, { status: 500 })
      });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

const sendRatingEmail = (body: any) => {
  return sendEmail(JSON.stringify(body), `Rating Email`)
}

const sendContactEmail = (body: any) => {
  let { message, name, email } = body;
  return sendEmail(message, `Message from ${name} (${email})`)
}
