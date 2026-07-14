import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory rate limiting (fine for a personal portfolio)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip);

    if (rateData) {
      if (now - rateData.lastReset > RATE_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      } else if (rateData.count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      } else {
        rateData.count++;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sanketmistry.codes@gmail.com',
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please check server configuration.' },
      { status: 500 }
    );
  }
}
