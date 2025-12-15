<template>
  <div class="banner">
    <div class="banner-overlay">
      <div class="container">
        <h1 class="banner-title">{{ title }}</h1>
        <p class="banner-subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Banner',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
})
</script>

<style scoped>
.banner {
  background: linear-gradient(135deg, #003366 0%, #004080 50%, #0059b3 100%);
  position: relative;
  overflow: hidden;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}

.banner-overlay {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.banner-title {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .banner {
    min-height: 180px;
  }

  .banner-title {
    font-size: 1.8rem;
  }

  .banner-subtitle {
    font-size: 1rem;
  }

  .banner-overlay {
    padding: 2rem 0;
  }
}
</style>
