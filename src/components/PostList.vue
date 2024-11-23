<template>
  <div class="post-list">
    <h2>Danh sách bài viết</h2>

    <div v-if="posts.length === 0" class="empty-message">
      <p>Hiện tại chưa có bài viết nào.</p>
    </div>

    <div
      v-for="(post, index) in posts"
      :key="index"
      :style="{ backgroundColor: post.backgroundColor || '#f9f9f9', color: post.textColor || '#333' }"
      class="post-item"
    >
      <h3>{{ post.title }}</h3>
      <h4>{{ post.author }}</h4>
      <p>{{ post.content }}</p>

      <!-- Hiển thị file nếu có -->
      <div v-if="post.file" class="file-preview">
        <p><strong>File đính kèm:</strong></p>
        <a :href="post.file" target="_blank" rel="noopener noreferrer" class="file-link">Xem file</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Khung tổng quát */
.post-list {
  padding: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  margin: 10px 0;
}

/* Tiêu đề */
.post-list h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
  color: #333;
}

/* Bài viết */
.post-item {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* Tiêu đề bài viết */
.post-item h3 {
  font-size: 1.2rem;
  color: #28a745;
  margin-bottom: 5px;
}

/* Tác giả */
.post-item h4 {
  font-size: 1rem;
  color: #dc3545;
  margin-bottom: 10px;
}

/* Nội dung */
.post-item p {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.4;
}

/* Thông báo trống */
.empty-message {
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
}
</style>
