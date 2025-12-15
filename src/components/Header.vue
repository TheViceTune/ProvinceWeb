<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="logo">
          <h1>Provincial Government</h1>
          <p class="tagline">Excellence in Public Service</p>
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
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">About</router-link></li>
          <li><router-link to="/services" @click="closeMobileMenu">Services</router-link></li>
          <li><router-link to="/tourism" @click="closeMobileMenu">Tourism</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: #003366;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-top {
  padding: 1.5rem 0;
  background: linear-gradient(135deg, #003366 0%, #004080 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo h1 {
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
}

.nav {
  background: #002952;
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
  transition: background 0.3s;
  border-bottom: 3px solid transparent;
}

.nav-list a:hover {
  background: #003d7a;
}

.nav-list a.router-link-active {
  background: #004080;
  border-bottom-color: #ffd700;
}

@media (max-width: 768px) {
  .logo h1 {
    font-size: 1.4rem;
  }

  .tagline {
    font-size: 0.8rem;
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
