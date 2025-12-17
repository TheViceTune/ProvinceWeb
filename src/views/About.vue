<template>
  <div class="about">
    <div class="hero-banner">
      <h1 class="font-cocogoose">VỀ QUẢNG TRỊ</h1>
      <p>
        Một không gian du lịch mới, nơi giá trị lịch sử và thiên nhiên hội tụ trong cùng một hành
        trình
      </p>
    </div>

    <!-- Vị trí địa lý -->
    <section class="geography-section">
      <div class="container">
        <h2 class="section-title font-cocogoose">VỊ TRÍ ĐỊA LÝ</h2>
        <div class="content-box">
          <p>
            Quảng Trị là một tỉnh nằm ở dải đất miền Trung Việt Nam, nơi chuyển tiếp giữa hai miền
            địa lý Bắc-Nam, nằm cách thủ đô Hà Nội 593 km về phía Nam, cách thành phố Đà Nẵng 178 km
            về phía Bắc.
          </p>

          <p>
            Phía bắc giáp tỉnh Quảng Bình, phía nam giáp thành phố Huế, phía tây giáp 2 tỉnh
            Savannakhet và Salavan của Cộng hòa Dân chủ Nhân dân Lào, phía Đông giáp biển Đông.
          </p>

          <p>
            Với tọa độ địa lý này, Quảng Trị được tạo nên bởi một không gian lãnh thổ mang sắc thái
            khí hậu nhiệt đới ẩm, điển hình của vòng đai nội chí tuyến Bắc bán cầu và chịu ảnh hưởng
            rất lớn của biển Đông.
          </p>

          <p>
            Dãy núi Trường Sơn khu vực thuộc tỉnh Quảng Trị có độ cao trung bình thấp nhất. Là tỉnh
            có diện tích đất bazan lớn nhất khu vực Bắc Trung Bộ với hơn 15.000ha rải rác nhiều nơi
            nhưng tập trung chủ yếu ở hai huyện Vĩnh Linh và Gio Linh.
          </p>
        </div>
      </div>
    </section>

    <!-- Lịch sử hình thành -->
    <section class="history-section">
      <div class="container">
        <h2 class="section-title font-cocogoose">LỊCH SỬ HÌNH THÀNH</h2>

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

        <div class="history-content">
          <p>
            Nằm giữa khúc ruột miền Trung, Quảng Trị được cả nước và thế giới biết đến nhiều nhất
            qua cuộc kháng chiến chống Mỹ từ năm 1954-1975.
          </p>

          <p>
            Những địa danh đã đi vào lịch sử dân tộc như "Cầu Hiền Lương, sông Bến Hải" gắn với nổi
            đau chia cắt đất nước; "Thành Cổ Quảng Trị" gắn với cuộc chiến đấu chống phản công, tái
            chiếm Quảng Trị 81 ngày đêm năm 1972.
          </p>

          <p>
            Ngày 20/7/1954, Hiệp định Geneva về chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương
            chính thức được ký kết. Theo Hiệp định, sông Bến Hải được chọn làm giới tuyến quân sự
            tạm thời chia đôi tỉnh Quảng Trị.
          </p>

          <p>
            Tháng 7/1989, tỉnh Quảng Trị được lập lại, đặt tỉnh lỵ tại thị xã Đông Hà. Với tổng diện
            tích tự nhiên là 4.746,4 km², gồm 10 đơn vị hành chính cấp huyện, 125 đơn vị hành chính
            cấp xã; dân số khoảng hơn 642.000 người, trong đó có khoảng 14% người dân tộc thiểu số.
          </p>
        </div>

        <div class="quote-highlight">
          <p>"Quảng Trị không chỉ để đến, mà để cảm – để mở"</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
})
</script>

<style scoped>
.about {
  width: 100%;
}

.hero-banner {
  background: linear-gradient(135deg, #8b1538 0%, #a91d3a 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.hero-banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.hero-banner p {
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
  line-height: 1.6;
}

.geography-section,
.history-section {
  padding: 5rem 0;
}

.geography-section {
  background: #f8f9fa;
}

.history-section {
  background: white;
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
  letter-spacing: 2px;
}

.content-box {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.content-box p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #333;
  font-size: 1.05rem;
}

.content-box p:last-child {
  margin-bottom: 0;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.timeline-item {
  text-align: center;
  padding: 2.5rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  border: 2px solid transparent;
}

.timeline-item:hover {
  transform: translateY(-8px);
  border-color: #f4c542;
}

.timeline-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.timeline-content h3 {
  font-size: 1.8rem;
  color: #8b1538;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.timeline-content p {
  font-size: 1.1rem;
  color: #666;
}

.history-content {
  max-width: 900px;
  margin: 0 auto 3rem;
  line-height: 1.8;
}

.history-content p {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  color: #333;
}

.quote-highlight {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f4c542 0%, #e0b030 100%);
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.quote-highlight p {
  font-size: 1.8rem;
  font-style: italic;
  color: #1a0a0f;
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

  .content-box {
    padding: 2rem 1.5rem;
  }

  .timeline {
    grid-template-columns: 1fr;
  }

  .quote-highlight p {
    font-size: 1.3rem;
  }
}
</style>
