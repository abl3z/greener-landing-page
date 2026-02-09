import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validatePayload(payload) {
  const errors = {}

  if (!payload.name?.trim()) errors.name = 'Name is required.'
  if (!payload.email?.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_REGEX.test(payload.email.trim())) {
    errors.email = 'Please provide a valid email address.'
  }
  if (!payload.message?.trim()) errors.message = 'Message is required.'

  return errors
}

function jsonResponse(res, statusCode, payload) {
  return res.status(statusCode).json(payload)
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return jsonResponse(res, 405, {
        success: false,
        message: 'Method not allowed. Use POST.'
      })
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS
    } = process.env

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return jsonResponse(res, 500, {
        success: false,
        message: 'Email server is not configured.'
      })
    }

    let body = req.body
    if (typeof req.body === 'string') {
      try {
        body = JSON.parse(req.body)
      } catch {
        return jsonResponse(res, 400, {
          success: false,
          message: 'Invalid request payload.'
        })
      }
    }

    const payload = {
      name: body?.name || '',
      email: body?.email || '',
      organization: body?.organization || '',
      message: body?.message || ''
    }

    const validationErrors = validatePayload(payload)
    if (Object.keys(validationErrors).length > 0) {
      const firstError = validationErrors.name || validationErrors.email || validationErrors.message
      return jsonResponse(res, 400, {
        success: false,
        message: firstError || 'Please provide valid form data.'
      })
    }

    const port = Number(SMTP_PORT)
    if (!Number.isInteger(port) || port <= 0) {
      return jsonResponse(res, 500, {
        success: false,
        message: 'Email server port configuration is invalid.'
      })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    })

    // Why the previous implementation failed:
    // it depended on browser-side EmailJS IDs/configuration, which can be missing/mismatched at runtime.
    // Why this fixes it:
    // mail is now sent server-side via Vercel + SMTP credentials stored in env vars.
    await transporter.sendMail({
      from: `"Greener Website" <${SMTP_USER}>`,
      to: 'info@greenerjo.com',
      replyTo: payload.email.trim(),
      subject: 'New Contact Form Submission — Greener',
      text: [
        `Name: ${payload.name.trim()}`,
        `Email: ${payload.email.trim()}`,
        `Organization: ${payload.organization.trim() || 'Not provided'}`,
        '',
        'Message:',
        payload.message.trim()
      ].join('\n')
    })

    return jsonResponse(res, 200, { success: true })
  } catch (error) {
    console.error('SMTP send failed:', error)
    return jsonResponse(res, 502, {
      success: false,
      message: 'Message could not be sent right now. Please try again shortly.'
    })
  }
}
