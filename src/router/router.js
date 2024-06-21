import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/view/dashboard.vue'
import category from '@/view/Category/category.vue'

const routes = [
  {
    path: '/categories',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/categories/:category',
    name: 'category',
    component: category
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
