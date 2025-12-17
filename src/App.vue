<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
    <ChatPopup />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ChatPopup from './components/ChatPopup.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    ChatPopup,
  },
})
</script>

<style scoped>
.main-content {
  flex: 1;
  width: 100%;
}
</style>
