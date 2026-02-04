import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().max(200).optional().nullable(),
  email: z.string().email().max(320),
  message: z.string().min(1).max(4000),
  service: z.string().max(200).optional().nullable(),
})

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 })
  }

  const payload = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
  }

  const { name, company, email, message, service } = parsed.data
  const resend = new Resend(process.env.RESEND_API_KEY)

  const from = process.env.RESEND_FROM || "Pelorus <onboarding@resend.dev>"
  const to = process.env.RESEND_TO || "pelorusproduction@gmail.com"
  const subject = "New contact form submission"

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "N/A"}`,
    `Service: ${service || "N/A"}`,
    "",
    message,
  ].join("\n")

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text,
  })

  if (error) {
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
