import router from "@/router";
import axios from "axios";
import VueCookies from "vue-cookies";
const Axios = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
export default {
  namespaced: true,
  state: {
    user: null,
    professions: [],
  },
  getters: {
    get_professions(state) {
      return state.professions;
    },
    get_user(state) {
      return state.user;
    },
  },
  mutations: {
    change_user(state, obj) {
      state.user = obj;
    },
    change_professions(state, new_value) {
      state.professions = new_value;
    },
  },
  actions: {
    async sign_up(_, obj) {
      try {
        const { data } = await Axios.post("sign_up/", obj);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async sign_in({ dispatch }, obj) {
      try {
        const { data } = await Axios.post("api/token/", obj);
        VueCookies.set("refresh", data.refresh, "1d", {
          secure: true,
          sameSite: "Strict",
        });
        VueCookies.set("access", data.access, "60m", {
          secure: true,
          sameSite: "Strict",
        });
        dispatch("get_user");
      } catch (error) {
        console.log(error);
      }
    },
    async log_out() {
      const config = {
        headers: {
          Authorization: `Bearer ${VueCookies.get("access")}`,
        },
      };
      const { data } = await Axios.post(
        "log_out/",
        { refresh: VueCookies.get("refresh") },
        config
      );
      console.log(data);
      VueCookies.remove("access", { secure: true });
      VueCookies.remove("refresh", { secure: true } );
      router.push({name: "sign_in"});

    },

    async get_user({ commit }) {
      const config = {
        headers: {
          Authorization: `Bearer ${VueCookies.get("access")}`,
        },
      };
      const user = await Axios.get("user/", config);
      commit("change_user", user.data);
      console.log(user.data);
      switch (user.data.user_type) {
        case "freelancer":
          router.push(`/freelancer/${user.data.username}`);
          break;
        case "admin":
          router.push("/admin");
          break;
        case "customer":
          router.push(`/customer/${user.data.username}`);
          break;
        default:
          router.push("/");
      }
    },
    async req_professions({ commit }) {
      const { data } = await Axios.get("professions/");
      console.log(data);
      commit("change_professions", data);
    },
  },
};
