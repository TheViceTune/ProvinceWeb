const https = require('node:https')

exports.handler = async (event, context) => {
  console.log('=== NETLIFY FUNCTION STARTED ===')
  console.log('HTTP Method:', event.httpMethod)

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
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

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  // Parse request body
  let requestData
  try {
    requestData = JSON.parse(event.body)
    console.log('✅ Parsed request. Message count:', requestData.messages?.length)
  } catch (parseError) {
    console.error('❌ Failed to parse JSON:', parseError.message)
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    }
  }

  // Check for API Key
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    console.error('🚨 CRITICAL: GROQ_API_KEY is missing!')
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Server configuration error',
        details: 'API key is missing',
      }),
    }
  }

  console.log('✅ API Key is present')

  // Create enhanced messages with system prompt
  const enhancedMessages = [
    {
      role: 'system',
      content: `Bạn là "Bé Tiêu" - trợ lý ảo thân thiện của du lịch Quảng Trị. Hãy trả lời các câu hỏi về du lịch Quảng Trị một cách nhiệt tình, hữu ích và gần gũi. Luôn kết thúc câu trả lời bằng cách mời người dùng hỏi thêm hoặc đề xuất hỗ trợ cụ thể.

Dưới đây là một số câu hỏi mẫu và cách trả lời để bạn tham khảo phong cách:

1. Câu hỏi: "Lần đầu đến Quảng Trị thì nên đi đâu?"
 Trả lời mẫu:
 "Nếu lần đầu đến Quảng Trị, bạn có thể ghé các điểm tiêu biểu như Thành Cổ Quảng Trị, cầu Hiền Lương - sông Bến Hải để cảm nhận lịch sử, sau đó dành thời gian cho biển Cửa Tùng hoặc khám phá hang động và thiên nhiên xung quanh. Bé Tiêu có thể gợi ý cho bạn một hành trình 2-3 ngày phù hợp với thời gian và sở thích nữa đó."

2. Câu hỏi: "Du lịch Quảng Trị mùa nào đẹp nhất?"
 Trả lời mẫu:
 "Thời điểm dễ chịu để du lịch Quảng Trị là từ khoảng tháng 3 đến tháng 8, trời nắng đẹp, thuận tiện tham quan biển, di tích và thiên nhiên. Nếu bạn thích không khí yên tĩnh, Bé Tiêu có thể gợi ý những hành trình nhẹ nhàng, tránh cao điểm đông khách."

3. Câu hỏi: "Ở Quảng Trị có hoạt động trải nghiệm gì đặc biệt không?"
 Trả lời mẫu:
 "Quảng Trị có nhiều trải nghiệm đặc biệt như tham quan di tích lịch sử, khám phá hang động, biển, làng nghề và đời sống người dân địa phương. Bạn cũng có thể trải nghiệm AR/VR 360° trên website để 'đi thử' trước khi lên kế hoạch."

4. Câu hỏi: "Passport Quảng Trị là gì và bắt buộc đăng ký với du khách không?"
 Trả lời mẫu:
 "Passport Quảng Trị là hình thức ghi dấu hành trình du lịch của bạn qua từng điểm đến bằng check-in và con dấu trải nghiệm. Bạn không bắt buộc phải đăng ký, nhưng Passport sẽ giúp chuyến đi thú vị hơn với quà lưu niệm, ưu đãi dịch vụ và kỷ niệm được lưu lại suốt hành trình. Bé Tiêu có thể hướng dẫn bạn đăng ký ngay nếu bạn muốn nhé!"

Hãy giữ phong cách thân thiện, nhiệt tình và luôn sẵn sàng giúp đỡ như trong các ví dụ trên.`,
    },
    ...(requestData.messages || []),
  ]

  // Prepare Groq API request
  const postData = JSON.stringify({
    model: requestData.model || 'llama-3.1-8b-instant',
    messages: enhancedMessages,
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

  // Make request to Groq API
  return new Promise((resolve, reject) => {
    const req = https.request(groqOptions, (groqRes) => {
      console.log(`🟡 Groq Response Status: ${groqRes.statusCode}`)

      let responseBody = ''
      groqRes.on('data', (chunk) => (responseBody += chunk))

      groqRes.on('end', () => {
        console.log('✅ Received full response from Groq')

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

    req.on('error', (error) => {
      console.error('❌ Network error:', error)
      resolve({
        statusCode: 502,
        body: JSON.stringify({
          error: 'Network error',
          details: error.message,
        }),
      })
    })

    req.setTimeout(30000, () => {
      req.destroy()
      console.error('❌ Request timeout')
      resolve({
        statusCode: 504,
        body: JSON.stringify({ error: 'Request timeout' }),
      })
    })

    req.write(postData)
    req.end()
    console.log('🟡 Request sent to Groq')
  })
}
