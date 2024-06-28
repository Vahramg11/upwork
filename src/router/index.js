import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth.router'

const routes = [
  ...authRouter

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
