<!-- src/components/Bai3.vue -->
<template>
  <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>
    <!-- Form nhập thông tin cá nhân -->
    <form>
      <div class="mb-3">
        <label>Họ và Tên:</label>
        <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
      </div>
      <div class="mb-3">
        <label>Tuổi:</label>
        <input v-model="userInfo.age" type="number" class="form-control" placeholder="Nhập tuổi" />
      </div>
      <div class="mb-3">
        <label>Email:</label>
        <input v-model="userInfo.email" type="email" class="form-control" placeholder="Nhập email" />
      </div>
    </form>

    <!-- Hiển thị thông tin trực tiếp -->
    <div class="info-display mt-4 p-3 bg-dark text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Khởi tạo đối tượng thông tin người dùng
const userInfo = reactive({
  name: '',
  age: null,
  email: ''
});
</script>

<style scoped>
/* Căn giữa toàn bộ nội dung của trang */
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Căn giữa theo chiều ngang */
  height: 100vh; /* Chiều cao toàn màn hình */
  padding: 20px;
}

/* Thu nhỏ kích thước khung của form */
.col-sm-8 {
  width: 300px;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(81, 72, 72, 0.1); 
  border-radius: 8px;
  flex-direction: column;
}

/* Style các trường nhập liệu */
form .mb-3 {
  margin-bottom: 15px;
  width: 130%;
}

form label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

form input {
  padding: 10px;
  font-size: 15px;
  width: 100%; 
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Chỉnh sửa khung hiển thị thông tin */
.info-display {
  margin-top: 20px;
  padding: 15px;
  background-color: skyblue;
  color: white;
  border-radius: 8px;
  font-size: 15px;
  width: 90%; /* ô đen */
}

.info-display h2 {
  margin-bottom: 15px;
  font-size: 20px;
  width: 100%;
}


</style>
