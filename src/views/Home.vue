<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/byvuZYhXi-M?autoplay=1&mute=1&start=46&loop=1&playlist=byvuZYhXi-M"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hero-overlay">
        <div class="container hero-content">
          <h1 class="hero-title">Quảng Trị – Khai phá vẻ đẹp, Khai mở vẻ mình</h1>
          <p class="hero-subtitle">
            Nơi ký ức lịch sử, kỳ quan thiên nhiên và hành trình nội tâm giao thoa
          </p>
          <div class="hero-cta">
            <button class="btn btn-primary">🔍 Khám phá điểm đến</button>
            <button class="btn btn-secondary">🗺️ Lên hành trình phù hợp với bạn</button>
            <button class="btn btn-accent">🎫 Mở Passport Quảng Trị</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Explore -->
    <section class="quick-explore">
      <div class="container">
        <h2 class="section-title">Quick Explore - Khám phá nhanh</h2>
        <div class="explore-grid">
          <div class="explore-card" @mouseover="activeCard = 1" @mouseleave="activeCard = null">
            <div class="card-front">
              <div class="card-icon">📍</div>
              <h3>Điểm đến</h3>
            </div>
            <div class="card-back" :class="{ active: activeCard === 1 }">
              <p>Top 10 điểm cần ghé thăm khi đến Quảng Trị được chọn lọc</p>
            </div>
          </div>

          <div class="explore-card" @mouseover="activeCard = 2" @mouseleave="activeCard = null">
            <div class="card-front">
              <div class="card-icon">🧭</div>
              <h3>Hành trình</h3>
            </div>
            <div class="card-back" :class="{ active: activeCard === 2 }">
              <p>4 cách "mở" Quảng Trị: Chữa lành | Phiêu lưu | Văn hóa | Lịch sử</p>
            </div>
          </div>

          <div class="explore-card" @mouseover="activeCard = 3" @mouseleave="activeCard = null">
            <div class="card-front">
              <div class="card-icon">🥽</div>
              <h3>AR/VR 360°</h3>
            </div>
            <div class="card-back" :class="{ active: activeCard === 3 }">
              <p>Trải nghiệm trước khi đi</p>
            </div>
          </div>

          <div class="explore-card" @mouseover="activeCard = 4" @mouseleave="activeCard = null">
            <div class="card-front">
              <div class="card-icon">🎉</div>
              <h3>Lễ hội & Sự kiện</h3>
            </div>
            <div class="card-back" :class="{ active: activeCard === 4 }">
              <p>Concert | Drone show | Triển lãm | Workshop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const activeCard = ref<number | null>(null)

    return {
      activeCard,
    }
  },
})
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  position: relative;
  height: 85vh;
  min-height: 600px;
  overflow: hidden;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  line-height: 1.2;
  font-style: italic;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  font-weight: 300;
}

.hero-cta {
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.btn-primary {
  background: #2d5a3d;
  color: white;
}

.btn-primary:hover {
  background: #1a472a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.btn-secondary {
  background: white;
  color: #2d5a3d;
}

.btn-secondary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.btn-accent {
  background: #d4af37;
  color: #0f2818;
}

.btn-accent:hover {
  background: #c19a2e;
  transform: translateY(-2px);
}

.quick-explore {
  padding: 5rem 0;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
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

.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.explore-card {
  position: relative;
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.explore-card:hover {
  transform: translateY(-8px);
}

.card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2d5a3d 0%, #1a472a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: opacity 0.3s;
}

.explore-card:hover .card-front {
  opacity: 0;
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.card-front h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.card-back.active {
  opacity: 1;
}

.card-back p {
  font-size: 1.1rem;
  text-align: center;
  color: #0f2818;
  font-weight: 500;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    min-height: 500px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    padding: 0.9rem 1.5rem;
  }

  .explore-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .explore-card {
    height: 280px;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
