<template>
  <div class="chat-container">
    <div v-if="isOpen" class="chat-window">
      <div class="chat-header">
        <div class="header-info">
          <span class="chat-bird">🐦</span>
          <div>
            <h3>Bé Tiêu</h3>
            <p class="chat-tagline">Dẫn đường Quảng Trị</p>
          </div>
        </div>
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
          placeholder="Hỏi Bé Tiêu về Quảng Trị..."
          :disabled="isLoading"
        />
        <button @click="sendMessage" :disabled="isLoading || !userInput.trim()">📤</button>
      </div>
    </div>
    <button @click="toggleChat" class="chat-toggle" :class="{ hidden: isOpen }">
      <span class="chat-icon">🐦</span>
      <span class="notification-badge" v-if="hasNewMessage">!</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from 'vue'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default defineComponent({
  name: 'ChatPopup',
  setup() {
    const isOpen = ref(false)
    const isLoading = ref(false)
    const userInput = ref('')
    const messages = ref<Message[]>([
      {
        role: 'assistant',
        content:
          'Xin chào! Mình là Bé Tiêu 🐦 Đi Quảng Trị, để mình dẫn đường nha! Bạn muốn khám phá điều gì?',
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
      messages.value.push({
        role: 'user',
        content: userMessage,
      })
      userInput.value = ''
      isLoading.value = true
      scrollToBottom()

      try {
        const systemPrompt = `Bạn là "Bé Tiêu", một hướng dẫn viên du lịch AI thân thiện và am hiểu về tỉnh Quảng Trị, Việt Nam. Bạn giúp du khách lên kế hoạch chuyến đi, cung cấp thông tin về điểm đến, văn hóa, lịch sử và trải nghiệm địa phương.

Bạn có kiến thức về:
- Địa danh lịch sử: Thành Cổ Quảng Trị, Cầu Hiền Lương, sông Bến Hải, địa đạo Vịnh Mốc
- Thiên nhiên: Biển Cửa Tùng, hang động, rừng nguyên sinh
- 4 gói tour: Khai Tâm (chữa lành), Khai Phá (phiêu lưu), Khai Sắc (văn hóa), Khai Ký (lịch sử)
- Passport Quảng Trị: Hệ thống check-in và ghi dấu hành trình
- Lễ hội, sự kiện, và AR/VR 360° trải nghiệm

Phong cách giao tiếp:
- Thân thiện, nhiệt tình, gần gũi
- Dùng "mình" thay vì "tôi", "bạn" thay vì "quý khách"
- Giọng điệu trẻ trung, tích cực
- Kết thúc câu bằng "nha", "đó", "nhé" để thân mật
- Luôn khuyến khích du khách khám phá Quảng Trị

Hãy trả lời ngắn gọn (2-4 câu), nhiệt tình và hữu ích!`

        const response = await fetch('/.netlify/functions/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: [
              { role: 'system', content: systemPrompt },
              ...messages.value.map((msg) => ({
                role: msg.role,
                content: msg.content,
              })),
            ],
            max_tokens: 500,
            temperature: 0.8,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Error response:', errorText)
          throw new Error(`Server error: ${response.status}`)
        }

        const data = await response.json()
        const assistantMessage = data.choices[0].message.content

        messages.value.push({
          role: 'assistant',
          content: assistantMessage,
        })

        if (!isOpen.value) {
          hasNewMessage.value = true
        }
      } catch (error) {
        console.error('Error:', error)
        messages.value.push({
          role: 'assistant',
          content: 'Xin lỗi bạn, mình gặp chút vấn đề kỹ thuật. Vui lòng thử lại sau nhé! 🙏',
        })
      } finally {
        isLoading.value = false
        scrollToBottom()
      }
    }

    return {
      isOpen,
      isLoading,
      userInput,
      messages,
      hasNewMessage,
      messagesContainer,
      toggleChat,
      sendMessage,
    }
  },
})
</script>

<style scoped>
.chat-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.chat-toggle {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b1538 0%, #a91d3a 100%);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(139, 21, 56, 0.4);
  transition: all 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(139, 21, 56, 0.5);
}

.chat-toggle.hidden {
  display: none;
}

.chat-icon {
  display: block;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.notification-badge {
  position: absolute;
  top: -3px;
  right: -3px;
  background: #f4c542;
  color: #1a0a0f;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  font-style: normal;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.chat-window {
  width: 400px;
  height: 550px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  background: linear-gradient(135deg, #8b1538 0%, #a91d3a 100%);
  color: white;
  padding: 1.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.chat-bird {
  font-size: 2rem;
}

.header-info h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.chat-tagline {
  font-size: 0.8rem;
  opacity: 0.9;
  margin: 0;
  font-style: italic;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  border-radius: 50%;
}

.close-btn:hover {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.1);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.2rem;
  background: #f8f9fa;
}

.message {
  margin-bottom: 1rem;
  display: flex;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message-content {
  max-width: 75%;
  padding: 0.85rem 1.1rem;
  border-radius: 14px;
  word-wrap: break-word;
  line-height: 1.5;
}

.message.user .message-content {
  background: #8b1538;
  color: white;
  border-bottom-right-radius: 4px;
}

.message.assistant .message-content {
  background: white;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.typing {
  display: flex;
  gap: 5px;
  padding: 1rem 1.2rem !important;
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
  gap: 0.5rem;
}

.chat-input input {
  flex: 1;
  padding: 0.85rem 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  font-size: 0.95rem;
  font-family: inherit;
}

.chat-input input:focus {
  border-color: #8b1538;
}

.chat-input button {
  padding: 0.85rem 1.2rem;
  background: #8b1538;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
}

.chat-input button:hover:not(:disabled) {
  background: #6b0f2b;
  transform: scale(1.05);
}

.chat-input button:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .chat-container {
    left: 10px;
    bottom: 10px;
    right: 10px;
  }

  .chat-window {
    width: 100%;
    max-width: calc(100vw - 20px);
    height: calc(100vh - 100px);
    max-height: 550px;
  }

  .chat-toggle {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
}
</style>
