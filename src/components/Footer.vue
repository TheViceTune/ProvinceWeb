<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Liên hệ</h3>
          <p>Sở Văn hóa, Thể thao và Du lịch</p>
          <p>Tỉnh Quảng Trị, Việt Nam</p>
          <p>Email: info@quangtri.gov.vn</p>
          <p>Điện thoại: (0233) 3xxx-xxx</p>
        </div>
        <div class="footer-section">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><router-link to="/">Trang chủ</router-link></li>
            <li><router-link to="/about">Về chúng tôi</router-link></li>
            <li><router-link to="/services">Trải nghiệm</router-link></li>
            <li><router-link to="/tourism">Du lịch</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div class="social-links">
            <a href="#" aria-label="Facebook">📘 Facebook</a>
            <a href="#" aria-label="Instagram">📷 Instagram</a>
            <a href="#" aria-label="YouTube">🎥 YouTube</a>
          </div>
          <p class="mt-2">ThuGuiQuangTri</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Quảng Trị Tourism. All rights reserved.</p>
        <p class="quote">"Quảng Trị không chỉ để đến, mà để cảm – để mở"</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear,
    }
  },
})
</script>

<style scoped>
.footer {
  background: #1a0a0f;
  color: white;
  padding: 2.5rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #f4c542;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-section p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  opacity: 0.9;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.6rem;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  opacity: 0.9;
}

.footer-section a:hover {
  color: #f4c542;
  opacity: 1;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
}

.footer-bottom p {
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.quote {
  font-style: italic;
  color: #f4c542;
  font-size: 0.95rem;
  margin-top: 0.8rem;
  opacity: 1 !important;
}

.mt-2 {
  margin-top: 0.8rem;
  font-weight: 600;
  color: #f4c542;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    text-align: center;
  }

  .social-links {
    align-items: center;
  }
}
</style>
