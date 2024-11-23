<!-- src/components/Bai2.vue -->
<template>
  <div class="container">
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Logic bài 2
const userInput = ref('');
</script>

<style scoped>
.container {
  align-items: center;
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 140px;
  width: 200px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 80%;
  border: 1px solid #ccc;
}

p {
  font-size: 20px;
  color: #333;
}
</style>
