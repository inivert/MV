import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig()

  try {
    // Get the validated form data from the request
    const formData = await readBody(event)

    // Forward the request to n8n webhook
    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`)
    }

    return {
      success: true,
      message: 'Form submitted successfully'
    }
  } catch (error) {
    console.error('Error forwarding to webhook:', error)

    setResponseStatus(event, 500)
    return {
      success: false,
      error: 'Failed to process your request'
    }
  }
})
