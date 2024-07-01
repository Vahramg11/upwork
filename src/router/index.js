import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth.router'
import adminRouter from "./admin.router"
import freelancerRouter from './freelancer.router'
import customerRouter from './customer.router'

const routes = [
  ...authRouter,
  ...adminRouter,
  ...freelancerRouter,
  ...customerRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
