// netlify/functions/chat.js
// ✅ Use the native 'node:https' module for better control
const https = require('node:https')

exports.handler = async (event, context) => {
  // 🟡 Log 1: Function execution started
  console.log('=== NETLIFY FUNCTION STARTED ===')
  console.log('HTTP Method:', event.httpMethod)
  console.log('Path:', event.path)

  // 1. Handle CORS preflight (OPTIONS) request
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling CORS preflight request')
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    }
  }

  // 2. Only allow POST requests
  if (event.httpMethod !== 'POST') {
    console.log('❌ Blocked: Method not allowed')
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  // 3. Try to parse the incoming request body
  let requestData
  try {
    requestData = JSON.parse(event.body)
    console.log('✅ Parsed request body. Message count:', requestData.messages?.length)
  } catch (parseError) {
    console.log('❌ Failed to parse JSON body:', parseError.message)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON in request body' }),
    }
  }

  // 4. Check for the critical API Key
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    // 🚨 This is the MOST LIKELY cause of a 403
    console.error('🚨 CRITICAL ERROR: GROQ_API_KEY environment variable is NOT SET.')
    console.error('Please set it in Netlify dashboard: Site Settings > Environment Variables')
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Server configuration error',
        details: 'API key is missing on the server.',
      }),
    }
  } else {
    // Log a safe portion of the key for verification
    const keyPreview = apiKey.substring(0, 7) + '...'
    console.log('✅ API Key is present (starts with):', keyPreview)
  }

  // 5. Prepare the request to Groq
  const postData = JSON.stringify({
    model: requestData.model || 'llama3-8b-8192',
    messages: requestData.messages || [],
    max_tokens: requestData.max_tokens || 500,
    temperature: requestData.temperature || 0.7,
  })

  const groqOptions = {
    hostname: 'api.groq.com',
    port: 443,
    path: '/openai/v1/chat/completions',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'Netlify-Serverless-Function',
    },
  }

  console.log('🟡 Sending request to Groq API...')
  console.log('Target Host:', groqOptions.hostname)
  console.log('Target Path:', groqOptions.path)
  console.log('Request Model:', postData.model || 'llama3-8b-8192')

  // 6. Make the request to Groq API and return a Promise
  return new Promise((resolve, reject) => {
    const req = https.request(groqOptions, (groqRes) => {
      console.log(`🟡 Groq API Response Status: ${groqRes.statusCode} ${groqRes.statusMessage}`)
      console.log('Groq API Response Headers:', JSON.stringify(groqRes.headers))

      let responseBody = ''
      groqRes.on('data', (chunk) => (responseBody += chunk))

      groqRes.on('end', () => {
        console.log('✅ Received full response from Groq API')

        // 🟡 Log the first 500 chars of the response for debugging
        const logPreview =
          responseBody.length > 500 ? responseBody.substring(0, 500) + '...' : responseBody
        console.log('Response Body Preview:', logPreview)

        // Forward the Groq API response back to your Vue app
        resolve({
          statusCode: groqRes.statusCode,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: responseBody,
        })
      })
    })

    // 7. Handle request errors (like network issues)
    req.on('error', (error) => {
      console.error('❌ NETWORK ERROR requesting Groq API:', error)
      resolve({
        statusCode: 502,
        body: JSON.stringify({
          error: 'Network error communicating with AI service',
          details: error.message,
        }),
      })
    })

    // 8. Handle request timeout
    req.setTimeout(30000, () => {
      // 30 second timeout
      req.destroy()
      console.error('❌ TIMEOUT ERROR: Request to Groq API took too long.')
      resolve({
        statusCode: 504,
        body: JSON.stringify({ error: 'Request to AI service timed out' }),
      })
    })

    // Send the data to Groq
    req.write(postData)
    req.end()
    console.log('🟡 HTTPS request to Groq has been sent.')
  })
}
