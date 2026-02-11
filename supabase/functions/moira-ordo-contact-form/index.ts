const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

Deno.serve(async (req) => {

  const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  const fromEmail = 'onboarding@resend.dev'
  const toEmail = 'joselynelvira99@gmail.com'

  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: 'Missing RESEND_API_KEY.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  try {
    const payload = await req.json()
    const name = String(payload.name ?? '').trim()
    const email = String(payload.email ?? '').trim()
    const phone = String(payload.phone ?? '').trim()
    const company = String(payload.company ?? '').trim()
    const message = String(payload.message ?? '').trim()
    const language = String(payload.language ?? '').trim()

    const projectType = payload.projectType ?? {}
    const projectTypeLabel = String(projectType.label ?? projectType.value ?? '').trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const subjectSuffix = projectTypeLabel ? ` - ${projectTypeLabel}` : ''
    const subject = `Nueva solicitud de web: ${subjectSuffix}`

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1a1a1a;">
        <h2>Nuevo contacto desde Moira Ordo</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(phone || 'No indicado')}</p>
        <p><strong>Empresa/Proyecto:</strong> ${escapeHtml(company || 'No indicado')}</p>
        <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectTypeLabel || 'No indicado')}</p>
        <p><strong>Idioma:</strong> ${escapeHtml(language || 'No indicado')}</p>
        <hr />
        <p style="white-space: pre-wrap;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `.trim()

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
        reply_to: email
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      return new Response(JSON.stringify({ error: errorText }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
