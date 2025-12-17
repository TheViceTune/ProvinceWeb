<template>
  <div class="contact">
    <div class="hero-banner">
      <h1>Liên hệ</h1>
      <p>Chúng tôi sẵn sàng hỗ trợ bạn</p>
    </div>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Thông tin liên hệ</h2>

            <div class="info-item">
              <div class="info-icon">📍</div>
              <div>
                <h3>Địa chỉ</h3>
                <p>Sở Văn hóa, Thể thao và Du lịch</p>
                <p>Tỉnh Quảng Trị, Việt Nam</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <h3>Điện thoại</h3>
                <p>(0233) 3xxx-xxx</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@quangtri.gov.vn</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div>
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                <p>Thứ 7, Chủ nhật: Nghỉ</p>
              </div>
            </div>

            <div class="social-section">
              <h3>Kết nối với chúng tôi</h3>
              <div class="social-links">
                <a href="#" class="social-link">📘 Facebook</a>
                <a href="#" class="social-link">📷 Instagram</a>
                <a href="#" class="social-link">🎥 YouTube</a>
              </div>
              <p class="hashtag">#ThuGuiQuangTri</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form">
            <h2>Gửi tin nhắn cho chúng tôi</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Họ và tên *</label>
                <input type="text" id="name" v-model="form.name" required />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" v-model="form.email" required />
              </div>

              <div class="form-group">
                <label for="phone">Số điện thoại</label>
                <input type="tel" id="phone" v-model="form.phone" />
              </div>

              <div class="form-group">
                <label for="subject">Chủ đề *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Chọn chủ đề</option>
                  <option value="tour">Tư vấn tour</option>
                  <option value="passport">Passport Quảng Trị</option>
                  <option value="event">Sự kiện & lễ hội</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Nội dung *</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>

              <button type="submit" class="btn-submit">Gửi tin nhắn</button>
            </form>

            <div v-if="submitMessage" class="submit-message" :class="submitStatus">
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links-section">
      <div class="container">
        <h2 class="section-title">Liên kết nhanh</h2>
        <div class="quick-links-grid">
          <router-link to="/" class="quick-link-card">
            <div class="quick-link-icon">🏠</div>
            <h3>Trang chủ</h3>
          </router-link>
          <router-link to="/tourism" class="quick-link-card">
            <div class="quick-link-icon">🗺️</div>
            <h3>Điểm đến</h3>
          </router-link>
          <router-link to="/services" class="quick-link-card">
            <div class="quick-link-icon">🎫</div>
            <h3>Passport</h3>
          </router-link>
          <div class="quick-link-card" @click="scrollToTop">
            <div class="quick-link-icon">💬</div>
            <h3>Chat với Bé Tiêu</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })

    const submitMessage = ref('')
    const submitStatus = ref('')

    const handleSubmit = () => {
      submitMessage.value = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
      submitStatus.value = 'success'

      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }

      // Clear message after 5 seconds
      setTimeout(() => {
        submitMessage.value = ''
        submitStatus.value = ''
      }, 5000)
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
      form,
      submitMessage,
      submitStatus,
      handleSubmit,
      scrollToTop,
    }
  },
})
</script>

<style scoped>
.contact {
  width: 100%;
}

.hero-banner {
  background: linear-gradient(135deg, #8b1538 0%, #a91d3a 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-banner p {
  font-size: 1.3rem;
  opacity: 0.95;
}

.contact-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info,
.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-info h2,
.contact-form h2 {
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 2rem;
  font-weight: 700;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: start;
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.info-item h3 {
  font-size: 1.2rem;
  color: #1a472a;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-item p {
  color: #666;
  line-height: 1.6;
}

.social-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.social-section h3 {
  font-size: 1.2rem;
  color: #1a472a;
  margin-bottom: 1rem;
  font-weight: 600;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.social-link {
  color: #2d5a3d;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.social-link:hover {
  color: #1a472a;
}

.hashtag {
  font-weight: 700;
  color: #d4af37;
  font-size: 1.1rem;
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2d5a3d;
}

.form-group textarea {
  resize: vertical;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: #2d5a3d;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-submit:hover {
  background: #1a472a;
  transform: translateY(-2px);
}

.submit-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
}

.quick-links-section {
  padding: 5rem 0;
  background: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a472a;
  font-weight: 700;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.quick-link-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.quick-link-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.quick-link-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.quick-link-card h3 {
  color: #1a472a;
  font-size: 1.3rem;
  font-weight: 600;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .contact-info,
  .contact-form {
    padding: 1.5rem;
  }

  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
