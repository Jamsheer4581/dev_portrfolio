import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>

          <hr />

          <p>
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          message: "Failed to send email.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}