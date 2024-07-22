import { createRouter, createWebHistory } from "vue-router";
import authRouter from "./auth.router";
import adminRouter from "./admin.router";
import freelancerRouter from "./freelancer.router";
import customerRouter from "./customer.router";
import store from "@/store";


import VueCookies from "vue-cookies";
import axios from "axios";
const Axios = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
Axios.interceptors.request.use(
  (config) => {
    const token = VueCookies.get("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const routes = [
  ...authRouter,
  ...adminRouter,
  ...freelancerRouter,
  ...customerRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
console.log(adminRouter);

router.beforeEach(async (to, from, next) => {
  if (to.meta.check_user) {
    if(!store.state.admin.user){
      const {data} = await Axios.get("user/")
      console.log("data nv", data);
      store.commit("auth/change_user", data)
    }
    next()
  }else{
    next()
  }
  
});

export default router;
