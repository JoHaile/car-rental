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

export async function sendPasswordResetEmail(userEmail: string, url: string) {
  const mailMessage = {
    from: "support.carRental@gmail.com",
    to: userEmail,
    subject: "Password Reset Request - Car Rental",
    text: `You requested a password reset. Use this link to reset your password: ${url}`,
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fa;padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);padding:32px 32px 24px 32px;font-family:Segoe UI,Arial,sans-serif;">
            <tr>
              <td align="center" style="padding-bottom:24px;">
                <img src="https://cdn-icons-png.flaticon.com/512/743/743007.png" alt="Car Rental" width="48" style="margin-bottom:8px;">
                <h2 style="margin:0;font-size:1.6rem;color:#1a202c;font-weight:600;">Password Reset Request</h2>
                <p style="margin:8px 0 0 0;color:#64748b;font-size:1rem;">We received a request to reset your password. Click the button below to set a new password.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 0;">
                <a href="${url}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:1.1rem;font-weight:600;letter-spacing:0.5px;">Reset Password</a>
                <p style="margin:24px 0 0 0;color:#334155;font-size:1rem;">If you did not request this, you can safely ignore this email.</p>
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

export async function sendBookingConformation(
  userEmail: string,
  BookingId: string
) {
  const mailMessage = {
    from: "support.carRental@gmail.com",
    to: userEmail,
    subject: "Booking Confirmation - Car Rental",
    text: `Here is your Booking ID: ${BookingId}. Save this for future reference.`,
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fa;padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06);padding:32px 32px 24px 32px;font-family:Segoe UI,Arial,sans-serif;">
            <tr>
              <td align="center" style="padding-bottom:24px;">
                <img src="https://cdn-icons-png.flaticon.com/512/743/743007.png" alt="Car Rental" width="48" style="margin-bottom:8px;">
                <h2 style="margin:0;font-size:1.6rem;color:#1a202c;font-weight:600;">Booking Confirmed!</h2>
                <p style="margin:8px 0 0 0;color:#64748b;font-size:1rem;">Thank you for choosing Gondar Car Rental. Your booking has been successfully confirmed.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:24px 0;">
                <div style="display:inline-block;background:#f1f5f9;border-radius:8px;padding:24px 32px;">
                  <span style="display:block;color:#64748b;font-size:1rem;margin-bottom:8px;">Your Booking ID</span>
                  <span style="font-size:1.5rem;color:#2563eb;font-weight:700;letter-spacing:1px;">${BookingId}</span>
                </div>
                <p style="margin:24px 0 0 0;color:#334155;font-size:1rem;">Please save this Booking ID for your records and future reference.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0 0 0;">
                <div style="background:#f8fafc;border-radius:8px;padding:20px 24px;margin:0 auto 12px auto;max-width:480px;">
                  <h3 style="margin:0 0 8px 0;color:#1e293b;font-size:1.1rem;">Next Steps:</h3>
                  <ol style="color:#334155;font-size:1rem;padding-left:20px;margin:0;">
                    <li style="margin-bottom:8px;">Go to the nearest branch and complete your payment <strong>within 24 hours</strong>.</li>
                    <li style="margin-bottom:8px;">CBE Account Number: <span style="font-weight:600;color:#2563eb;">100000000</span></li>
                    <li style="margin-bottom:8px;">After payment, reply to this email with your payment screenshot.</li>
                    <li>We will verify your payment and notify you once it is confirmed.</li>
                  </ol>
                </div>
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
