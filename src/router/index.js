import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth.router'
import adminRouter from "./admin.router"
import freelancerRouter from './freelancer.router'
import customerRouter from './customer.router'
import axios from 'axios';
import VueCookies from 'vue-cookies';



const Axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});
Axios.interceptors.request.use((config) => {
  const token = VueCookies.get("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


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
router.beforeEach((from, to, next)=>{
  from
 if(to.meta.check_user){
  next()
  alert();
 }

  console.log('===>')
})









export default router
