import axios from "axios";
import VueCookies from 'vue-cookies';
import router from "@/router";
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

export default {
  namespaced: true,
  state: {
    skills: []
  },
  getters: {},
  actions: {
    async add_job(_, info) {
      try {
        const { data } = await Axios.post(`add_job/${router.currentRoute._value.params.username}/`, info)
        this.commit("admin/add_job_to_customer", data)
      }
      catch (err) {
        console.warn(err)
      }
    },

    async all_skills({commit}) {
      const { data } = await Axios.get("all_skills/")
      commit("change_skills",data)
      console.log(data);
    }


  },
  mutations: {
    change_skills(state, data){
      state.skills = data
    }
  }
}