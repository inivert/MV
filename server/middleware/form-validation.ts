import { H3Event, EventHandlerRequest } from 'h3'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds
const MAX_REQUESTS_PER_IP = 5 // Maximum requests per IP per window

// Store for rate limiting
const requestCounts = new Map<string, { count: number; timestamp: number }>()

// Validation rules
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/
  const commonProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com']

  if (!emailRegex.test(email)) {
    return false
  }

  const domain = email.split('@')[1].toLowerCase()
  if (email.includes('..')) {
    return false
  }
  if (domain.startsWith('.') || domain.endsWith('.')) {
    return false
  }

  return commonProviders.includes(domain)
}

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(?:\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}))$/
  const digitsOnly = phone.replace(/\D/g, '')
  return phoneRegex.test(phone) && digitsOnly.length === 10
}

const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  return nameRegex.test(name) && name.length >= 2 && name.length <= 50
}

// Interface for form data
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

const containsSpamContent = (message: string): boolean => {
  const spamIndicators = [
    'http', 'www.', '.com', '.net', '.org',
    'viagra', 'casino', 'lottery', 'prize',
    'winner', 'free money', 'bitcoin'
  ]
  const lowercaseMessage = message.toLowerCase()
  return spamIndicators.some(indicator => lowercaseMessage.includes(indicator))
}

const hasExcessiveCapitalization = (message: string): boolean => {
  const upperCaseCount = (message.match(/[A-Z]/g) || []).length
  return upperCaseCount / message.length > 0.5
}

// Validate form data
const validateFormData = (data: FormData): string[] => {
  const errors: string[] = []

  if (!data.firstName?.trim() || !isValidName(data.firstName)) {
    errors.push('First name must be 2-50 characters long and contain only letters, spaces, hyphens, or apostrophes')
  }
  if (!data.lastName?.trim() || !isValidName(data.lastName)) {
    errors.push('Last name must be 2-50 characters long and contain only letters, spaces, hyphens, or apostrophes')
  }
  if (!data.email?.trim() || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address from a recognized provider')
  }
  if (!data.phone?.trim() || !isValidPhone(data.phone)) {
    errors.push('Phone number must be 10 digits in format: (123) 456-7890 or 123-456-7890')
  }
  if (!data.service?.trim()) {
    errors.push('Service selection is required')
  }
  if (!data.message?.trim()) {
    errors.push('Project details are required')
  } else {
    const messageLength = data.message.trim().length
    if (messageLength < 20) {
      errors.push('Project details must be at least 20 characters long')
    }
    if (messageLength > 1000) {
      errors.push('Project details cannot exceed 1000 characters')
    }
    if (containsSpamContent(data.message)) {
      errors.push('Message contains prohibited content')
    }
    if (hasExcessiveCapitalization(data.message)) {
      errors.push('Message contains too many capital letters')
    }
  }

  return errors
}

// Check rate limit for IP
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now()
  const requestData = requestCounts.get(ip)

  if (!requestData) {
    requestCounts.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    requestCounts.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (requestData.count >= MAX_REQUESTS_PER_IP) {
    return false
  }

  requestData.count++
  return true
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [ip, data] of requestCounts.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      requestCounts.delete(ip)
    }
  }
}, RATE_LIMIT_WINDOW)

export default defineEventHandler(async (event: H3Event<EventHandlerRequest>) => {
  if (event.path !== '/api/quote' || event.method !== 'POST') {
    return
  }

  try {
    const clientIp = getRequestHeader(event, 'x-forwarded-for') || 'unknown'

    if (!checkRateLimit(clientIp)) {
      setResponseStatus(event, 429)
      return { error: 'Too many requests. Please try again later.' }
    }

    const body = await readBody(event)
    const validationErrors = validateFormData(body)

    if (validationErrors.length > 0) {
      setResponseStatus(event, 400)
      return { error: 'Validation failed', details: validationErrors }
    }
  } catch (error) {
    console.error('Form validation error:', error)
    setResponseStatus(event, 500)
    return { error: 'Internal server error' }
  }
})
