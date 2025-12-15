<template>
  <div class="services">
    <Banner title="Government Services" subtitle="Access the services and resources you need" />
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
.services {
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
