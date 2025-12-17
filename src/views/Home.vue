<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/byvuZYhXi-M?autoplay=1&mute=1&start=46&loop=1&playlist=byvuZYhXi-M&controls=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div class="hero-overlay">
        <div class="container hero-content">
          <h1 class="hero-title">
            <span class="font-cocogoose">QUẢNG TRỊ</span>
            <span class="hero-subtitle-main font-beauty">Khai phá vẻ đẹp, Khai mở vẻ mình</span>
          </h1>
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
        <h2 class="section-title font-cocogoose">Quick Explore - Khám phá nhanh</h2>
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
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(139, 21, 56, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%);
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.hero-title .font-cocogoose {
  font-size: 4rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
  letter-spacing: 3px;
}

.hero-subtitle-main {
  font-size: 2.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
  color: #f4c542;
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
  background: #8b1538;
  color: white;
}

.btn-primary:hover {
  background: #6b0f2b;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.btn-secondary {
  background: white;
  color: #8b1538;
}

.btn-secondary:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
}

.btn-accent {
  background: #f4c542;
  color: #1a0a0f;
}

.btn-accent:hover {
  background: #e0b030;
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
  color: #8b1538;
  letter-spacing: 1px;
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
  background: linear-gradient(135deg, #8b1538 0%, #a91d3a 100%);
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
  background: #f4c542;
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
  color: #1a0a0f;
  font-weight: 500;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    min-height: 500px;
  }

  .hero-title .font-cocogoose {
    font-size: 2.5rem;
  }

  .hero-subtitle-main {
    font-size: 1.5rem;
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
