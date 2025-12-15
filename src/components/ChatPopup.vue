<template>
  <div class="chat-container">
    <div v-if="isOpen" class="chat-window">
      <div class="chat-header">
        <h3>Government Assistant</h3>
        <button @click="toggleChat" class="close-btn">&times;</button>
      </div>
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
          <div class="message-content">{{ message.content }}</div>
        </div>
        <div v-if="isLoading" class="message assistant">
          <div class="message-content typing"><span></span><span></span><span></span></div>
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Type your message..."
          :disabled="isLoading"
        />
        <button @click="sendMessage" :disabled="isLoading || !userInput.trim()">Send</button>
      </div>
    </div>
    <button @click="toggleChat" class="chat-toggle" :class="{ hidden: isOpen }">
      <span class="chat-icon">💬</span>
      <span class="notification-badge" v-if="hasNewMessage">1</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const isOpen = ref(false)
const isLoading = ref(false)
const userInput = ref('')
const messages = ref<Message[]>([
  {
    role: 'assistant',
    content: "Hello! I'm your Government Assistant. How can I help you today?",
  },
])
const hasNewMessage = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    hasNewMessage.value = false
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return

  const userMessage = userInput.value.trim()

  // Add user message to the chat
  messages.value.push({
    role: 'user',
    content: userMessage,
  })

  userInput.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    // 🟡 Debug: Log what we're sending
    console.log('Sending messages:', messages.value)

    // Prepare the request body EXACTLY as the function expects
    const requestBody = {
      model: 'llama3-8b-8192', // Use a model you know works
      messages: messages.value, // Send the entire array
      max_tokens: 500,
      temperature: 0.7,
    }

    console.log('Request body:', JSON.stringify(requestBody, null, 2))

    const response = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody), // Stringify the entire object
    })

    // 🟡 Debug: Log the raw response
    console.log('Response status:', response.status, response.statusText)

    if (!response.ok) {
      // Try to get more details from the response
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`Server error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('Success! Response data:', data)

    const assistantMessage = data.choices[0].message.content

    messages.value.push({
      role: 'assistant',
      content: assistantMessage,
    })

    if (!isOpen.value) {
      hasNewMessage.value = true
    }
  } catch (error) {
    console.error('Full error details:', error)
    messages.value.push({
      role: 'assistant',
      content: `Sorry, I encountered an error: ${error.message}. Please check the console for details.`,
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* 样式保持不变 */
.chat-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.chat-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #003366 0%, #004080 100%);
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  position: relative;
}

.chat-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.chat-toggle.hidden {
  display: none;
}

.chat-icon {
  display: block;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.chat-window {
  width: 380px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  background: linear-gradient(135deg, #003366 0%, #004080 100%);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.close-btn:hover {
  transform: scale(1.2);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: #f5f5f5;
}

.message {
  margin-bottom: 1rem;
  display: flex;
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message-content {
  max-width: 75%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  word-wrap: break-word;
}

.message.user .message-content {
  background: #003366;
  color: white;
  border-bottom-right-radius: 4px;
}

.message.assistant .message-content {
  background: white;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.typing {
  display: flex;
  gap: 4px;
  padding: 1rem !important;
}

.typing span {
  width: 8px;
  height: 8px;
  background: #999;
  border-radius: 50%;
  animation: typing 1.4s infinite;
}

.typing span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
}

.chat-input {
  display: flex;
  padding: 1rem;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.chat-input input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  font-size: 0.95rem;
}

.chat-input input:focus {
  border-color: #003366;
}

.chat-input button {
  margin-left: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #003366;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.chat-input button:hover:not(:disabled) {
  background: #004080;
}

.chat-input button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .chat-container {
    left: 10px;
    bottom: 10px;
  }

  .chat-window {
    width: calc(100vw - 20px);
    height: calc(100vh - 100px);
    max-width: 380px;
  }

  .chat-toggle {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}
</style>
