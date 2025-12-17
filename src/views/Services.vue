<template>
  <div class="services">
    <div class="hero-banner">
      <h1>Trải nghiệm</h1>
      <p>Khám phá Quảng Trị qua những trải nghiệm độc đáo</p>
    </div>

    <!-- Photo Exhibition -->
    <section class="exhibition-section">
      <div class="container">
        <h2 class="section-title">Triển lãm số: Quảng Trị qua những lớp ký ức và cảm xúc</h2>

        <div class="tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
          >
            {{ tab.name }}
          </button>
        </div>

        <div class="tab-content">
          <div v-if="activeTab === 1" class="gallery">
            <div class="gallery-item" v-for="i in 6" :key="i">
              <div class="gallery-placeholder">📷</div>
              <p class="gallery-caption">{{ getWarCaption(i) }}</p>
            </div>
          </div>

          <div v-if="activeTab === 2" class="gallery">
            <div class="gallery-item" v-for="i in 6" :key="i">
              <div class="gallery-placeholder nature">🌿</div>
              <p class="gallery-caption">{{ getNatureCaption(i) }}</p>
            </div>
          </div>

          <div v-if="activeTab === 3" class="gallery">
            <div class="gallery-item" v-for="i in 6" :key="i">
              <div class="gallery-placeholder people">👥</div>
              <p class="gallery-caption">{{ getPeopleCaption(i) }}</p>
            </div>
          </div>
        </div>

        <div class="story-quote">
          <p>{{ getCurrentStory() }}</p>
        </div>
      </div>
    </section>

    <!-- AR/VR Section -->
    <section class="vr-section">
      <div class="container">
        <h2 class="section-title">AR/VR 360°</h2>
        <p class="section-subtitle">Trải nghiệm Quảng Trị trước khi bạn thật sự đặt chân tới</p>

        <div class="vr-grid">
          <div class="vr-card" v-for="item in vrLocations" :key="item.id">
            <div class="vr-icon">{{ item.icon }}</div>
            <h3>{{ item.name }}</h3>
            <div class="vr-actions">
              <button class="btn-vr">🎧 Trải nghiệm VR</button>
              <button class="btn-save">📍 Lưu vào hành trình</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Passport & Tours -->
    <section class="passport-section">
      <div class="container">
        <h2 class="section-title">Passport – Mở Quảng Trị</h2>
        <p class="section-subtitle">Không chỉ là du lịch, mà là hành trình được ghi dấu</p>

        <div class="passport-features">
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>Passport vật lý + số</h3>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Check-in bằng QR</h3>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3>Mỗi con dấu = 1 câu chuyện</h3>
          </div>
        </div>

        <div class="tours-grid">
          <div class="tour-card" v-for="tour in tours" :key="tour.id">
            <div class="tour-icon">{{ tour.icon }}</div>
            <h3>{{ tour.name }}</h3>
            <p>{{ tour.description }}</p>
            <span class="tour-tag">{{ tour.tag }}</span>
          </div>
        </div>

        <div class="cta-center">
          <button class="btn btn-primary">Chọn hành trình phù hợp</button>
          <button class="btn btn-secondary">Đăng ký Passport kèm tour</button>
        </div>
      </div>
    </section>

    <!-- Contest Section -->
    <section class="contest-section">
      <div class="container">
        <h2 class="section-title">Thư gửi Quảng Trị</h2>
        <p class="section-subtitle">Khi hành trình trở thành ký ức</p>

        <div class="contest-info">
          <div class="contest-themes">
            <h3>Chủ đề:</h3>
            <div class="theme-tags">
              <span>Mở tầm mắt</span>
              <span>Mở tấm lòng</span>
              <span>Mở thể chất</span>
            </div>
          </div>

          <div class="contest-formats">
            <h3>Hình thức:</h3>
            <div class="format-tags">
              <span>📝 Thư</span>
              <span>📷 Ảnh</span>
              <span>🎥 Video</span>
            </div>
          </div>
        </div>

        <button class="btn btn-accent">Tham gia ngay #ThuGuiQuangTri</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Services',
  setup() {
    const activeTab = ref(1)

    const tabs = [
      { id: 1, name: 'Ký ức chiến tranh' },
      { id: 2, name: 'Thiên nhiên' },
      { id: 3, name: 'Con người Quảng Trị' },
    ]

    const vrLocations = [
      { id: 1, name: 'Hang động', icon: '🕳️' },
      { id: 2, name: 'Biển', icon: '🌊' },
      { id: 3, name: 'Di tích', icon: '🏛️' },
      { id: 4, name: 'Làng nghề', icon: '🏘️' },
    ]

    const tours = [
      {
        id: 1,
        name: 'Khai Tâm – Chữa lành',
        icon: '🧘',
        description: 'Biển – núi – nhịp sống chậm',
        tag: 'Dành cho người cần nghỉ ngơi sâu',
      },
      {
        id: 2,
        name: 'Khai Phá – Phiêu lưu',
        icon: '⛰️',
        description: 'Hang động – trekking – vượt giới hạn',
        tag: 'Thử thách bản thân',
      },
      {
        id: 3,
        name: 'Khai Sắc – Văn hóa',
        icon: '🎨',
        description: 'Làng nghề – nông nghiệp – kết nối gia đình',
        tag: 'Trải nghiệm văn hóa',
      },
      {
        id: 4,
        name: 'Khai Ký – Lịch sử',
        icon: '📜',
        description: 'Di tích – chiêm nghiệm – tri ân',
        tag: 'Tìm hiểu lịch sử',
      },
    ]

    const getWarCaption = (index: number) => {
      const captions = [
        'Thành Cổ',
        'Sông Thạch Hãn',
        'Cầu Hiền Lương',
        'Di tích lịch sử',
        'Ký ức chiến tranh',
        'Vùng đất anh hùng',
      ]
      return captions[index - 1] || 'Di tích'
    }

    const getNatureCaption = (index: number) => {
      const captions = [
        'Hang động',
        'Biển xanh',
        'Rừng nguyên sinh',
        'Núi non hùng vĩ',
        'Thác nước',
        'Thiên nhiên hoang sơ',
      ]
      return captions[index - 1] || 'Thiên nhiên'
    }

    const getPeopleCaption = (index: number) => {
      const captions = [
        'Làng nghề',
        'Đời sống thường nhật',
        'Nụ cười bản địa',
        'Văn hóa địa phương',
        'Con người Quảng Trị',
        'Truyền thống',
      ]
      return captions[index - 1] || 'Con người'
    }

    const getCurrentStory = () => {
      const stories: Record<number, string> = {
        1: '"Có những nơi, chỉ cần đứng yên cũng nghe được lịch sử thì thầm..."',
        2: '"Thiên nhiên ở đây không phô trương, nhưng đủ sâu để khiến con người lắng lại."',
        3: '"Nụ cười của người dân Quảng Trị là món quà quý giá nhất của hành trình."',
      }
      return stories[activeTab.value] || ''
    }

    return {
      activeTab,
      tabs,
      vrLocations,
      tours,
      getWarCaption,
      getNatureCaption,
      getPeopleCaption,
      getCurrentStory,
    }
  },
})
</script>

<style scoped>
.services {
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

.exhibition-section {
  background: #f8f9fa;
}

.vr-section {
  background: white;
}

.passport-section {
  background: #f8f9fa;
}

.contest-section {
  background: linear-gradient(135deg, #d4af37 0%, #c19a2e 100%);
  color: #0f2818;
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

.contest-section .section-title {
  color: #0f2818;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #666;
}

.contest-section .section-subtitle {
  color: #0f2818;
  opacity: 0.9;
}

.tabs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.8rem 2rem;
  border: 2px solid #2d5a3d;
  background: white;
  color: #2d5a3d;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-btn:hover {
  background: #f0f0f0;
}

.tab-btn.active {
  background: #2d5a3d;
  color: white;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.gallery-item {
  text-align: center;
}

.gallery-placeholder {
  background: linear-gradient(135deg, #2d5a3d 0%, #1a472a 100%);
  height: 250px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.gallery-placeholder:hover {
  transform: scale(1.05);
}

.gallery-placeholder.nature {
  background: linear-gradient(135deg, #4a7c59 0%, #2d5a3d 100%);
}

.gallery-placeholder.people {
  background: linear-gradient(135deg, #d4af37 0%, #c19a2e 100%);
}

.gallery-caption {
  font-weight: 600;
  color: #333;
}

.story-quote {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.story-quote p {
  font-size: 1.5rem;
  font-style: italic;
  color: #1a472a;
  font-weight: 500;
}

.vr-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.vr-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.vr-card:hover {
  transform: translateY(-8px);
}

.vr-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.vr-card h3 {
  font-size: 1.5rem;
  color: #1a472a;
  margin-bottom: 1.5rem;
}

.vr-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn-vr,
.btn-save {
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-vr {
  background: #2d5a3d;
  color: white;
}

.btn-vr:hover {
  background: #1a472a;
}

.btn-save {
  background: #f0f0f0;
  color: #333;
}

.btn-save:hover {
  background: #e0e0e0;
}

.passport-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #1a472a;
  font-size: 1.2rem;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.tour-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.tour-card:hover {
  transform: translateY(-8px);
}

.tour-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.tour-card h3 {
  color: #1a472a;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.tour-card p {
  color: #666;
  margin-bottom: 1rem;
}

.tour-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #d4af37;
  color: #0f2818;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
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

.btn-accent {
  background: #0f2818;
  color: #d4af37;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
}

.btn-accent:hover {
  background: #1a3a25;
}

.contest-info {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.contest-themes,
.contest-formats {
  margin-bottom: 2rem;
  text-align: center;
}

.contest-themes h3,
.contest-formats h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0f2818;
}

.theme-tags,
.format-tags {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.theme-tags span,
.format-tags span {
  padding: 0.7rem 1.5rem;
  background: white;
  color: #1a472a;
  border-radius: 50px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tours-grid {
    grid-template-columns: 1fr;
  }

  .cta-center {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
