import { createRouter, createWebHistory } from "vue-router";
import authRouter from "./auth.router";
import adminRouter from "./admin.router";
import freelancerRouter from "./freelancer.router";
import customerRouter from "./customer.router";
// import store from "@/store";


import VueCookies from "vue-cookies";
import axios from "axios";
import store from "@/store";
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
  {
    path: "/chat",
    component: () => import("@/views/chat/ChatPage.vue"),
    name: 'chat'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach(async (to, from, next) => {
  const token = VueCookies.get("access")


  if (!token && !to.meta.auth) {
    next({ name: "sign_in" })
  }
  else if (token && to.meta.auth) {
    try{
      const response = await Axios.get("user/");
      if (response.status == 200) {
        if (!store.state.auth.user) {
          store.commit("auth/change_user", response.data)
        }
        switch (response.data.user_type) {
          case "customer":
            alert()
            console.log(router)
            next({
              name: "defaultt", params: {
                username: response.data.username
              }
            })
            break
          case "freelancer":
            next({
              name: "defaulttt", params: {
                username: response.data.username
              }
            })
            break
          case "admin":
            next({ name: "default" })
            break
        }
      }
      else {
        next({ name: "sign_in" })
      }

    }catch(err){
      VueCookies.remove("access")
      next({name: "sign_in"})
    }

  }
  else if (token && to.meta.check_user) {
    const response = await Axios.get("user/");
    if (response.status == 200) {
      if (!store.state.auth.user) {
        store.commit("auth/change_user", response.data)
      }
      next()
    }

  }
  else {
    next()
  }

});




export default router;
