<template>
  <div class="blog-wrapper">
    <h1 class="blog-title">Trang Blog Bai4</h1>
    <!-- Thành phần tạo bài viết -->
    <CreatePost @add-post="addPost" />
    <!-- Thành phần danh sách bài viết -->
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreatePost from '@/components/CreatePost.vue';
import PostList from '@/components/PostList.vue';

// Danh sách bài viết, khởi tạo là một mảng rỗng
const posts = ref([]);

// Hàm xử lý khi có bài viết mới, sẽ thêm vào danh sách
function addPost(post) {
  post.backgroundColor = '#ffffff'; // Màu nền mặc định
  post.textColor = '#000000'; // Màu chữ mặc định
  posts.value.push(post);
}
</script>

<style scoped>
.blog-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-title {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}
</style>
