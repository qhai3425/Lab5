import { createRouter, createWebHistory } from 'vue-router';

// Import các component cần thiết
import Bai1 from '@/components/Bai1.vue';
import Bai2 from '@/components/Bai2.vue';
import Bai3 from '@/components/Bai3.vue';
import Bai4 from '@/components/Bai4.vue'; // Đảm bảo Bai4.vue tồn tại

// Định nghĩa các route
const routes = [
  {
    path: '/',
    redirect: '/bai1', // Mặc định chuyển hướng về Bai1
  },
  {
    path: '/bai1',
    name: 'Bai1',
    component: Bai1,
  },
  {
    path: '/bai2',
    name: 'Bai2',
    component: Bai2,
  },
  {
    path: '/bai3',
    name: 'Bai3',
    component: Bai3,
  },
  {
    path: '/bai4',
    name: 'Bai4',
    component: Bai4,
  },
  {
    path: '/:catchAll(.*)', // Xử lý tất cả các đường dẫn không hợp lệ
    redirect: '/bai1', // Chuyển hướng về Bai1
  },
];

// Tạo router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
