<template>
  <div id="app">
    <Header/>
    <main class="main-content">
      <router-view />
    </main>
    <Footer/>
    <ChatPopup />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ChatPopup from './components/ChatPopup.vue'
</script>

<style scoped>
.main-content {
  flex: 1;
  width: 100%;
}
</style>
