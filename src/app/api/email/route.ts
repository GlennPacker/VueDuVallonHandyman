import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
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
    return NextResponse.json({ error: 'Missing Env Vars' }, { status: 200 });

    // if(!process.env.MY_EMAIL) return NextResponse.json({ error: 'Missing Env Vars' }, { status: 500 });

    // return await sendMailPromise()
    //     .then(() => NextResponse.json({ message: 'Email Sent' }, { status: 200 }))
    //     .catch(error => NextResponse.json({ error }, { status: 500 }));
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
