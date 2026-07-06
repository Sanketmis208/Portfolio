import { NextResponse } from 'next/server';

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

    // TODO: Wire up Resend or EmailJS here
    // For now, log the message and return success
    console.log('📧 Contact form submission:', { name, email, message });

    // Example Resend integration (uncomment when API key is available):
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'sanketmistry.codes@gmail.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
