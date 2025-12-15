<template>
  <div class="about">
    <Banner
      title="About Our Province"
      subtitle="Learn more about our history, vision, and mission"
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
.about {
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
