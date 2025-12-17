<template>
  <div class="tourism">
    <div class="hero-banner">
      <h1>Du lịch Quảng Trị</h1>
      <p>Khám phá điểm đến và lên hành trình của riêng bạn</p>
    </div>

    <!-- Interactive Map -->
    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Bản đồ du lịch Interactive</h2>

        <div class="map-interactive">
          <div class="map-placeholder">
            <p>🗺️ Bản đồ tương tác Quảng Trị</p>
            <div class="map-legend">
              <span><span class="legend-icon">🛂</span> Có Passport check-in</span>
              <span><span class="legend-icon">🕶️</span> Có AR/VR</span>
              <span><span class="legend-icon">🧭</span> Secret Trail</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations -->
    <section class="destinations-section">
      <div class="container">
        <h2 class="section-title">Danh mục điểm đến</h2>

        <div class="destinations-grid">
          <div
            class="destination-card"
            v-for="destination in destinations"
            :key="destination.id"
            @click="selectDestination(destination)"
          >
            <div class="card-image">
              <span class="card-emoji">{{ destination.emoji }}</span>
            </div>
            <div class="card-content">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.description }}</p>
              <div class="card-badges">
                <span v-if="destination.hasPassport" class="badge">🛂 Passport</span>
                <span v-if="destination.hasVR" class="badge">🕶️ AR/VR</span>
                <span v-if="destination.isSecret" class="badge secret">🧭 Secret</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Suggestions -->
    <section class="journey-section">
      <div class="container">
        <h2 class="section-title">Hành trình gợi ý</h2>
        <p class="section-subtitle">Mỗi người có một cách mở Quảng Trị khác nhau</p>

        <div class="journey-grid">
          <div class="journey-card" v-for="journey in journeys" :key="journey.id">
            <div class="journey-icon">{{ journey.icon }}</div>
            <h3>{{ journey.name }}</h3>
            <p class="journey-type">{{ journey.type }}</p>
            <p>{{ journey.description }}</p>
            <button class="btn-journey">Khám phá hành trình</button>
          </div>
        </div>

        <div class="cta-center">
          <button class="btn btn-primary">Lên hành trình cho tôi</button>
          <button class="btn btn-secondary">Lưu vào Passport</button>
        </div>
      </div>
    </section>

    <!-- Destination Detail Modal -->
    <div v-if="selectedDestination" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <h2>{{ selectedDestination.name }}</h2>
        <div class="modal-emoji">{{ selectedDestination.emoji }}</div>
        <p>{{ selectedDestination.description }}</p>
        <div class="modal-info">
          <p><strong>Thuộc gói tour:</strong> {{ selectedDestination.tourType }}</p>
          <p>
            <strong>Đóng dấu Passport:</strong>
            {{ selectedDestination.hasPassport ? 'Có' : 'Không' }}
          </p>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary">Thêm vào hành trình</button>
          <button class="btn btn-secondary">Xem AR/VR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Destination {
  id: number
  name: string
  description: string
  emoji: string
  hasPassport: boolean
  hasVR: boolean
  isSecret: boolean
  tourType: string
}

export default defineComponent({
  name: 'Tourism',
  setup() {
    const selectedDestination = ref<Destination | null>(null)

    const destinations = ref<Destination[]>([
      {
        id: 1,
        name: 'Thành Cổ Quảng Trị',
        description: 'Di tích lịch sử quan trọng',
        emoji: '🏛️',
        hasPassport: true,
        hasVR: true,
        isSecret: false,
        tourType: 'Khai Ký - Lịch sử',
      },
      {
        id: 2,
        name: 'Cầu Hiền Lương',
        description: 'Biểu tượng chia cắt đất nước',
        emoji: '🌉',
        hasPassport: true,
        hasVR: true,
        isSecret: false,
        tourType: 'Khai Ký - Lịch sử',
      },
      {
        id: 3,
        name: 'Biển Cửa Tùng',
        description: 'Bãi biển đẹp và yên bình',
        emoji: '🏖️',
        hasPassport: true,
        hasVR: false,
        isSecret: false,
        tourType: 'Khai Tâm - Chữa lành',
      },
      {
        id: 4,
        name: 'Hang động Vịnh Mốc',
        description: 'Hệ thống hầm ngầm độc đáo',
        emoji: '🕳️',
        hasPassport: true,
        hasVR: true,
        isSecret: false,
        tourType: 'Khai Ký - Lịch sử',
      },
      {
        id: 5,
        name: 'Rừng nguyên sinh',
        description: 'Thiên nhiên hoang sơ',
        emoji: '🌲',
        hasPassport: false,
        hasVR: true,
        isSecret: true,
        tourType: 'Khai Phá - Phiêu lưu',
      },
      {
        id: 6,
        name: 'Làng nghề truyền thống',
        description: 'Văn hóa và nghề thủ công',
        emoji: '🏘️',
        hasPassport: true,
        hasVR: false,
        isSecret: false,
        tourType: 'Khai Sắc - Văn hóa',
      },
    ])

    const journeys = [
      {
        id: 1,
        name: 'Explorer',
        type: 'Khai Phá',
        icon: '⛰️',
        description: 'Dành cho những ai muốn khám phá và phiêu lưu',
      },
      {
        id: 2,
        name: 'Healer',
        type: 'Khai Tâm',
        icon: '🧘',
        description: 'Hành trình chữa lành và tìm lại bình yên',
      },
      {
        id: 3,
        name: 'Thinker',
        type: 'Khai Ký',
        icon: '📜',
        description: 'Tìm hiểu lịch sử và chiêm nghiệm',
      },
      {
        id: 4,
        name: 'Dreamer',
        type: 'Khai Sắc',
        icon: '🎨',
        description: 'Trải nghiệm văn hóa và nghệ thuật',
      },
    ]

    const selectDestination = (destination: Destination) => {
      selectedDestination.value = destination
    }

    const closeModal = () => {
      selectedDestination.value = null
    }

    return {
      destinations,
      journeys,
      selectedDestination,
      selectDestination,
      closeModal,
    }
  },
})
</script>

<style scoped>
.tourism {
  width: 100%;
}

.hero-banner {
  background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.hero-banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-banner p {
  font-size: 1.3rem;
  opacity: 0.95;
}

section {
  padding: 5rem 0;
}

.map-section {
  background: #f8f9fa;
}

.destinations-section {
  background: white;
}

.journey-section {
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
  margin-bottom: 1rem;
  color: #1a472a;
  font-weight: 700;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #666;
}

.map-interactive {
  max-width: 900px;
  margin: 0 auto;
}

.map-placeholder {
  background: white;
  border-radius: 16px;
  padding: 4rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.map-placeholder p {
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 2rem;
}

.map-legend {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.map-legend span {
  font-size: 1.1rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-icon {
  font-size: 1.5rem;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.destination-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  cursor: pointer;
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  background: linear-gradient(135deg, #2d5a3d 0%, #1a472a 100%);
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-emoji {
  font-size: 5rem;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  font-size: 1.5rem;
  color: #1a472a;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.card-content p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.card-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.4rem 0.8rem;
  background: #e8f5e9;
  color: #2d5a3d;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge.secret {
  background: #fff3cd;
  color: #856404;
}

.journey-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.journey-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.journey-card:hover {
  transform: translateY(-8px);
}

.journey-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.journey-card h3 {
  font-size: 1.8rem;
  color: #1a472a;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.journey-type {
  font-size: 1rem;
  color: #d4af37;
  font-weight: 600;
  margin-bottom: 1rem;
}

.journey-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn-journey {
  padding: 0.8rem 1.5rem;
  background: #2d5a3d;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-journey:hover {
  background: #1a472a;
}

.cta-center {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #2d5a3d;
  color: white;
}

.btn-primary:hover {
  background: #1a472a;
}

.btn-secondary {
  background: white;
  color: #2d5a3d;
  border: 2px solid #2d5a3d;
}

.btn-secondary:hover {
  background: #f0f0f0;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  max-width: 600px;
  width: 100%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: #666;
  line-height: 1;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
}

.modal-close:hover {
  background: #f0f0f0;
}

.modal-content h2 {
  font-size: 2rem;
  color: #1a472a;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.modal-emoji {
  font-size: 5rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.modal-content > p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
  text-align: center;
}

.modal-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.modal-info p {
  margin-bottom: 0.8rem;
  color: #333;
}

.modal-info p:last-child {
  margin-bottom: 0;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .journey-grid {
    grid-template-columns: 1fr;
  }

  .cta-center {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .modal-content {
    padding: 2rem 1.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-actions .btn {
    width: 100%;
  }
}
</style>
