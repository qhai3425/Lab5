`  <template>
    <div class="wrapper">
      <!-- Phần liên kết các bài nằm trên cùng -->
      <div class="links">
        <div class="section">
          <router-link to="/bai1">Trang Bài 1</router-link>
        </div>
        <div class="section">
          <router-link to="/bai2">Trang Bài 2</router-link>
        </div>
        <div class="section">
          <router-link to="/bai3">Trang Bài 3</router-link>
        </div>
        <div class="section">
          <router-link to="/bai4">Trang Bài 4</router-link>
        </div>
      </div>

      <!-- Hiển thị nội dung theo route -->
      <router-view class="content-view"></router-view>
    </div>
  </template>

  <script setup>
  // Không cần thêm gì vì router đã được cấu hình trong router.js
  </script>

  <style scoped>
  /* Cấu hình giao diện */
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    height: 100vh;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
  }

  .section {
    padding: 10px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .router-link-active {
    color: red; /* Khi đường dẫn đang active */
  }

  router-link {
    text-decoration: none;
    color: #007bff;
    font-size: 16px;
  }

  /* Nội dung chính */
  .content-view {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
  </style>
`