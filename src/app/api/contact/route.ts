import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullname,
      email,
      company,
      message,
    } = body;

    if (!fullname || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "CodiCare Contact <onboarding@resend.dev>",

      to: process.env.CONTACT_EMAIL!,

      replyTo: email,

      subject: `New Contact Form Submission from ${fullname}`,

      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;">
          <h2>New Contact Form Submission</h2>

          <hr>

          <p><strong>Full Name:</strong> ${fullname}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Organization:</strong> ${
            company || "Not provided"
          }</p>

          <h3>Message</h3>

          <p>${message.replace(/\n/g, "<br/>")}</p>

          <hr>

          <small>
            This message was submitted from the CodiCare website.
          </small>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending the email.",
      },
      {
        status: 500,
      }
    );
  }
}