import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { NextResponse } from 'next/server';

type ResponseData = {
  message: string
}

export async function POST(req: Request, res: NextResponse) {
  return NextResponse.json({ message: 'reCAPTCHA verification successful' })
}
