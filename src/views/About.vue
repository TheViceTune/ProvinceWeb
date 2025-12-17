<template>
  <div class="about">
    <div class="hero-banner">
      <h1>Về Quảng Trị</h1>
      <p>
        Một không gian du lịch mới, nơi giá trị lịch sử và thiên nhiên hội tụ trong cùng một hành
        trình
      </p>
    </div>

    <!-- Bản đồ hành chính -->
    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Bản đồ hành chính</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-layers">
              <button
                v-for="layer in mapLayers"
                :key="layer.id"
                @click="activeLayer = layer.id"
                :class="['layer-btn', { active: activeLayer === layer.id }]"
              >
                {{ layer.icon }} {{ layer.name }}
              </button>
            </div>
            <div class="map-info">
              <p>{{ getLayerDescription(activeLayer) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Lịch sử hình thành – Tinh thần thương hiệu</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-icon">🏛️</div>
            <div class="timeline-content">
              <h3>Ký ức</h3>
              <p>Vùng đất lịch sử</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">🏔️</div>
            <div class="timeline-content">
              <h3>Kỳ quan</h3>
              <p>Thiên nhiên nguyên bản</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-icon">✨</div>
            <div class="timeline-content">
              <h3>Khai mở</h3>
              <p>Du lịch trải nghiệm & nội tâm</p>
            </div>
          </div>
        </div>
        <div class="quote-highlight">
          <p>"Quảng Trị không chỉ để đến, mà để cảm – để mở"</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'About',
  setup() {
    const activeLayer = ref(1)

    const mapLayers = [
      { id: 1, name: 'Di sản lịch sử', icon: '🏛️' },
      { id: 2, name: 'Kỳ quan thiên nhiên', icon: '🏔️' },
      { id: 3, name: 'Cộng đồng – làng nghề', icon: '👥' },
    ]

    const getLayerDescription = (layerId: number) => {
      const descriptions: Record<number, string> = {
        1: 'Khám phá các di tích lịch sử và di sản văn hóa của Quảng Trị',
        2: 'Chiêm ngưỡng vẻ đẹp nguyên sơ của thiên nhiên Quảng Trị',
        3: 'Trải nghiệm văn hóa làng nghề và đời sống cộng đồng địa phương',
      }
      return descriptions[layerId] || ''
    }

    return {
      activeLayer,
      mapLayers,
      getLayerDescription,
    }
  },
})
</script>

<style scoped>
.about {
  width: 100%;
}

.hero-banner {
  background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.hero-banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-banner p {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.6;
}

.map-section,
.timeline-section {
  padding: 5rem 0;
}

.map-section {
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a472a;
  font-weight: 700;
}

.map-container {
  max-width: 900px;
  margin: 0 auto;
}

.map-placeholder {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

.map-layers {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.layer-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid #2d5a3d;
  background: white;
  color: #2d5a3d;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.layer-btn:hover {
  background: #f0f0f0;
}

.layer-btn.active {
  background: #2d5a3d;
  color: white;
}

.map-info {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-info p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.8;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.timeline-item {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.timeline-item:hover {
  transform: translateY(-8px);
}

.timeline-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.timeline-content h3 {
  font-size: 1.8rem;
  color: #1a472a;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.timeline-content p {
  font-size: 1.1rem;
  color: #666;
}

.quote-highlight {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #d4af37 0%, #c19a2e 100%);
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.quote-highlight p {
  font-size: 1.8rem;
  font-style: italic;
  color: #0f2818;
  font-weight: 600;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2rem;
  }

  .hero-banner p {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .timeline {
    grid-template-columns: 1fr;
  }

  .quote-highlight p {
    font-size: 1.3rem;
  }

  .map-layers {
    flex-direction: column;
  }

  .layer-btn {
    width: 100%;
  }
}
</style>
