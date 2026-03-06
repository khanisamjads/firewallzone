import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Debug logs to confirm environment variables
    console.log("DEBUG: SMTP_USER =", process.env.SMTP_USER);
    console.log("DEBUG: SMTP_PASS exists =", process.env.SMTP_PASS ? "YES" : "NO");
    console.log("DEBUG: SMTP_HOST =", process.env.SMTP_HOST);
    console.log("DEBUG: SMTP_PORT =", process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,          // e.g. "mail.firewall-zone.com"
      port: Number(process.env.SMTP_PORT),  // 465 for SSL, 587 for TLS
      secure: Number(process.env.SMTP_PORT) === 465, // true if 465, false if 587
      auth: {
        user: process.env.SMTP_USER,        // info@firewall-zone.com
        pass: process.env.SMTP_PASS,        // your mailbox password
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@firewall-zone.com", // recipient address
      subject: "New Enquiry",
      text: `Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Course: ${body.course}
Message: ${body.message}`,
    });

    // Debug log to confirm email response
    console.log("DEBUG: Email sent response =", info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DEBUG: Nodemailer error =", error);
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
