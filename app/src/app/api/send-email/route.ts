import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PWD
  }
})

export async function POST(request: Request) {
  try {
    const { email, name, message } = await request.json();

    const emailContent = `
      Name: ${name}
      Email: ${email}
      
      ${message}
    `

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.TARGET_EMAIL,
      subject: `Message from ${email}`,
      text: emailContent
    })

    return NextResponse.json({
      message: 'Email sent successfully.',
    })
  } catch (error) {
    console.error('Error in send-email API: ', error);
    return NextResponse.json({
      error: 'Failed to send email',
      status: 500
    })
  }
}
