<template>
  <div class="create-post">
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" placeholder="Tiêu đề bài viết" class="input-field" />
    <input v-model="author" placeholder="Tên tác giả" class="input-field" />
    <textarea v-model="content" placeholder="Nội dung bài viết" class="textarea-field"></textarea>

    <!-- Input để tải file -->
    <input type="file" @change="handleFileUpload" class="file-input" />
    <p v-if="fileName" class="file-info">File đã chọn: {{ fileName }}</p>

    <button @click="submitPost" class="submit-button">Đăng bài</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const content = ref('');
const author = ref('');
const errorMessage = ref('');
const file = ref(null); // Lưu trữ file tải lên
const fileName = ref(''); // Hiển thị tên file

const emit = defineEmits(['add-post']);

// Xử lý tải file
function handleFileUpload(event) {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    fileName.value = selectedFile.name;
  }
}

// Gửi bài viết kèm file
function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
      file: file.value ? URL.createObjectURL(file.value) : null, // Tạo URL nếu có file
    };

    emit('add-post', newPost);

    // Reset các trường
    title.value = '';
    content.value = '';
    author.value = '';
    file.value = null;
    fileName.value = '';
    errorMessage.value = '';
  } else {
    errorMessage.value = 'Vui lòng điền đầy đủ thông tin.';
  }
}
</script>

<style scoped>
/* Khung tổng quát */
.create-post {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  margin: 10px 0;
}

/* Tiêu đề */
.create-post h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
  color: #191818;
}

/* Trường nhập liệu và file input */
.input-field,
.textarea-field,
.file-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Textarea đặc biệt */
.textarea-field {
  height: 80px;
  resize: vertical;
}

/* Nút */
.submit-button {
  padding: 10px;
  width: 15%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Thông tin file */
.file-info {
  color: #373333;
  font-size: 0.9rem;
  margin-top: 5px;
}

/* Thông báo lỗi */
.error-message {
  color: #dc3545;
  font-size: 0.9rem;
  text-align: center;
}
</style>
