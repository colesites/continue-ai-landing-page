import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL || "waitlist@kontinueai.com";
  const fromEmail =
    process.env.WAITLIST_FROM_EMAIL || "Kontinue AI <waitlist@kontinueai.com>";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Waitlist email service is not configured yet." },
      { status: 500 }
    );
  }

  let body: { email?: string; useCase?: string };

  try {
    body = (await request.json()) as { email?: string; useCase?: string };
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const useCase = body.useCase?.trim() || "Not provided";

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [notifyEmail],
      subject: `New Kontinue AI waitlist signup: ${email}`,
      replyTo: email,
      text: `New waitlist signup\n\nEmail: ${email}\nUse case: ${useCase}`,
      html: `
        <h2>New Kontinue AI waitlist signup</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Use case:</strong> ${escapeHtml(useCase)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Could not submit waitlist right now. Please try again." },
      { status: 502 }
    );
  }
}
