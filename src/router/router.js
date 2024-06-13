import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/view/dashboard.vue'

const routes = [
  {
    path: '/dd',
    name: 'dashboard',
    component: dashboard
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
