<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="logo">
          <h1>Quảng Trị</h1>
          <p class="tagline">Khai phá vẻ đẹp, Khai mở vẻ mình</p>
        </div>
      </div>
    </div>
    <nav class="nav" :class="{ 'nav-open': mobileMenuOpen }">
      <div class="container">
        <button class="mobile-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-list">
          <li><router-link to="/" @click="closeMobileMenu">Trang chủ</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">Về chúng tôi</router-link></li>
          <li><router-link to="/services" @click="closeMobileMenu">Trải nghiệm</router-link></li>
          <li><router-link to="/tourism" @click="closeMobileMenu">Du lịch</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Liên hệ</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    }
  },
})
</script>

<style scoped>
.header {
  background: #1a472a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.header-top {
  padding: 1.2rem 0;
  background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo h1 {
  font-size: 2rem;
  margin-bottom: 0.2rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.tagline {
  font-size: 0.85rem;
  opacity: 0.95;
  font-style: italic;
  font-weight: 300;
}

.nav {
  background: #153d22;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  transition: all 0.3s;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 0;
}

.nav-list li {
  flex: 1;
}

.nav-list a {
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
  font-weight: 500;
}

.nav-list a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-list a.router-link-active {
  background: rgba(255, 255, 255, 0.15);
  border-bottom-color: #d4af37;
}

@media (max-width: 768px) {
  .logo h1 {
    font-size: 1.5rem;
  }

  .tagline {
    font-size: 0.75rem;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-list {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .nav.nav-open .nav-list {
    display: flex;
  }

  .nav-list li {
    width: 100%;
  }

  .nav-list a {
    text-align: left;
    padding: 1rem;
  }
}
</style>
