import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      to: process.env.CONTACT_EMAIL || parsed.data.email,
      from: process.env.SMTP_USER,
      subject: 'Contact form submission',
      text: JSON.stringify(parsed.data, null, 2)
    });
  }
  return NextResponse.json({ ok: true });
}
