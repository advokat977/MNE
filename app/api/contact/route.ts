import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

// Minimalni, konzervativni CSS sa autoswitch light/dark
const head = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<style>
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  body { margin:0; padding:0; }
  .bg { background:#f7f5f2; }
  .card { background:#ffffff; border:1px solid #e5e7eb; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,.06); }
  .ink { color:#111827; }
  .muted { color:#6b7280; }
  .chip { background:#ffffff; border:1px solid #e5e7eb; color:#111827; border-radius:999px; display:inline-block; padding:10px 14px; }
  .btn { background:#0f172a; color:#ffffff; border-radius:999px; text-decoration:none; padding:12px 20px; display:inline-block; font-weight:600; }
  a { color:#0f172a; text-decoration:none; border-bottom:1px solid #e5e7eb; padding-bottom:1px; }
  h1 { margin:0; font-family:Georgia,Times,serif; font-size:22px; line-height:1.3; }
  @media (prefers-color-scheme: dark) {
    .bg { background:#0b0d10; }
    .card { background:#0f1318; border-color:#232a32; box-shadow:0 10px 28px rgba(0,0,0,.35); }
    .ink { color:#e6e8eb; }
    .muted { color:#9aa3ad; }
    .chip { background:#0f1318; border-color:#232a32; color:#d1d5db; }
    a { color:#dbe3ea; border-bottom-color:#2e3740; }
    .btn { background:#1f2937; color:#ffffff; }
  }
  a[x-apple-data-detectors]{ color:inherit !important; text-decoration:none !important; }
</style>
`;

const shell = (inner: string) => `<!doctype html><html lang="en"><head>${head}</head>
<body class="bg">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;">
        <tr><td align="center" style="padding:8px 8px 20px;">
          <div class="chip" style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
            <strong>MNE Consulting</strong>
            <span class="muted">&nbsp;•&nbsp;Trusted Local Counsel for EU Investors</span>
          </div>
        </td></tr>
        ${inner}
      </table>
    </td></tr>
  </table>
</body></html>`;

function adminHtml(p: {
  name: string; email: string; company: string; service: string; message: string; submittedAt: string;
}) {
  return shell(`
    <tr><td class="card">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:24px 28px; border-bottom:1px solid #e5e7eb;">
          <h1>New inquiry received</h1>
          <p class="muted" style="margin:6px 0 0; font:13px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">mneconsulting.org • GDPR-compliant</p>
        </td></tr>
        <tr><td style="padding:18px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font:15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
            <tr>
              <td style="vertical-align:top; width:50%; padding-right:10px;">
                <p class="muted" style="margin:0 0 6px; font-size:12px; letter-spacing:.04em; text-transform:uppercase;">Name</p>
                <p class="ink" style="margin:0 0 12px;">${esc(p.name) || "—"}</p>
              </td>
              <td style="vertical-align:top; width:50%; padding-left:10px;">
                <p class="muted" style="margin:0 0 6px; font-size:12px; letter-spacing:.04em; text-transform:uppercase;">Company</p>
                <p class="ink" style="margin:0 0 12px;">${esc(p.company) || "—"}</p>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top; width:50%; padding-right:10px;">
                <p class="muted" style="margin:0 0 6px; font-size:12px; letter-spacing:.04em; text-transform:uppercase;">Email</p>
                <p class="ink" style="margin:0 0 12px;"><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
              </td>
              <td style="vertical-align:top; width:50%; padding-left:10px;">
                <p class="muted" style="margin:0 0 6px; font-size:12px; letter-spacing:.04em; text-transform:uppercase;">Service</p>
                <p class="ink" style="margin:0 0 12px;">${esc(p.service) || "—"}</p>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:0 28px 18px;">
          <p class="muted" style="margin:0 0 6px; font:12px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; letter-spacing:.04em; text-transform:uppercase;">Message</p>
          <div class="ink" style="border:1px solid #e5e7eb; border-radius:10px; padding:14px; background:#fbfbfb;">
            ${esc(p.message) || "—"}
          </div>
        </td></tr>
        <tr><td style="padding:6px 28px 22px;">
          <p class="muted" style="margin:8px 0 0; font:12px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">Submitted at: <span class="ink">${esc(p.submittedAt)}</span></p>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:18px 8px 0; text-align:center;">
      <p class="muted" style="margin:0; font:11px system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">Internal notification — a contact submitted the form on mneconsulting.org.</p>
    </td></tr>
  `);
}

function clientHtml() {
  return shell(`
    <tr><td class="card">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:28px;">
          <h1>Thank you for contacting us</h1>
          <p class="ink" style="margin:16px 0 0; font:15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
            We have received your inquiry and our team will review it carefully.
          </p>
          <p class="ink" style="margin:12px 0 0; font:15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
            We reply within <strong>1–2 business days</strong>. If your matter is urgent, please call us directly at
            <a href="tel:+38269125155">+382 69 125 155</a>.
          </p>
          <p class="ink" style="margin:20px 0 0; font:15px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
            Thank you for placing your trust in <strong>MNE Consulting</strong>. We look forward to assisting you with your investment in Montenegro.
          </p>
          <div style="margin-top:28px;">
            <a href="https://mneconsulting.org" class="btn">Visit our website</a>
          </div>
        </td></tr>
      </table>
    </td></tr>
    <tr><td style="padding:20px 10px 0; text-align:center;">
      <p class="muted" style="margin:0; font:12px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
        MNE Consulting • Podgorica, Montenegro<br>
        EU-facing operations compliant with GDPR • Montenegrin Bar since 2004<br>
        <a href="mailto:info@mneconsulting.org">info@mneconsulting.org</a> ·
        <a href="https://mneconsulting.org/privacy">Privacy</a> ·
        <a href="https://mneconsulting.org/terms">Terms</a>
      </p>
    </td></tr>
  `);
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM || !process.env.EMAIL_ADMIN) {
      return NextResponse.json({ ok: false, error: "Server email not configured" }, { status: 500 });
    }

    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });

    const { name = "", email = "", company = "", service = "", message = "" } = body as Record<string, string>;

    // Trivijalna validacija
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Valid email required" }, { status: 400 });
    }
    if (!name || !message) {
      return NextResponse.json({ ok: false, error: "Name and message are required" }, { status: 400 });
    }

    const submittedAt = new Date().toISOString().replace("T", " ").replace("Z", " UTC");

    // 1) Admin notifikacija (Reply-To = korisnik)
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_ADMIN!,
      subject: `New inquiry — ${name || email}`,
      html: adminHtml({ name, email, company, service, message, submittedAt }),
      reply_to: email,
    });

    // 2) Autoresponder klijentu
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "MNE Consulting — Thank you for your inquiry",
      html: clientHtml(),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}
