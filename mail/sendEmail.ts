import nodemailer from "nodemailer";

export async function sendContactEmail(
  userEmail: string,
  userName: string,
  message: string
) {
  const mailMessage = {
    from: userEmail,
    to: "yohannes.h93@gmail.com",
    subject: "New Contact Form Submission - Car Rental",
    html: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="margin:0;padding:0;background:#f4f6fa;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fa;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);padding:32px 32px 24px 32px;font-family:Segoe UI,Arial,sans-serif;">
              <tr>
                <td align="center" style="padding-bottom:24px;">
                  <img src="https://cdn-icons-png.flaticon.com/512/743/743007.png" alt="Car Rental" width="48" style="margin-bottom:8px;">
                  <h2 style="margin:0;font-size:1.6rem;color:#1a202c;font-weight:600;">New Contact Request</h2>
                  <p style="margin:8px 0 0 0;color:#64748b;font-size:1rem;">You have received a new message from your website contact form.</p>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:1rem;color:#334155;">
                    <tr>
                      <td style="padding:8px 0;width:120px;font-weight:500;">Name:</td>
                      <td style="padding:8px 0;">${userName}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;width:120px;font-weight:500;">Email:</td>
                      <td style="padding:8px 0;"><a href="mailto:${userEmail}" style="color:#2563eb;text-decoration:none;">${userEmail}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;width:120px;font-weight:500;vertical-align:top;">Message:</td>
                      <td style="padding:8px 0;background:#f8fafc;border-radius:6px;">${message}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="color:#94a3b8;font-size:0.95rem;padding-top:12px;border-top:1px solid #e2e8f0;">
                  <p style="margin:0;">Car Rental &copy; 2025 &mdash; All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail(mailMessage);
  } catch (error) {
    console.log("Something went wrong. Please try again later!", error);
  }
}

export async function sendPasswordResetEmail(userEmail: string) {}
