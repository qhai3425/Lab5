<!-- src/components/Bai1.vue -->
<template>
  <div class="container">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Logic bài 1
const message = ref('Thông điệp ban đầu');
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!';
};
</script>

<style scoped>
.container {
  height: 100px;
  width: 200px;
  border: 2px solid #ccc;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-dark {
  background-color: palevioletred;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

.btn-dark:hover {
  background-color: skyblue;
}
</style>
