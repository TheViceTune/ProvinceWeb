<template>
  <div class="home">
    <Banner
      title="Welcome to Our Province"
      subtitle="Building a better future together through innovation and dedication"
    />
    <div class="content">
      <div class="container">
        <!-- Content placeholder -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/Banner.vue';
</script>

<style scoped>
.home {
  width: 100%;
}

.content {
  padding: 3rem 0;
  min-height: 400px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
