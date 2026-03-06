import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Debug logs to confirm environment variables
    console.log("DEBUG: SMTP_USER =", process.env.SMTP_USER);
    console.log("DEBUG: SMTP_PASS exists =", process.env.SMTP_PASS ? "YES" : "NO");

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@firewall-zone.com",
      subject: "New Enquiry",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    });

    // Debug log to confirm email response
    console.log("DEBUG: Email sent response =", info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DEBUG: Nodemailer error =", error);
    return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
  }
}
