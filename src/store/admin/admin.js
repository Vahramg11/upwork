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
export default {
  namespaced: true,
  state: {
    jobs: [],
    customers: [],
    freelancers: [],
    one_freelancer: null,
    one_customer: null,
    job_types: [],
  },
  getters: {
    // **********freelancer************
    get_freelancers(state) {
      return state.freelancers;
    },
    get_one_freelancer(state) {
      return state.one_freelancer;
    },
    // *********customer**********
    get_customers(state) {
      return state.customers;
    },
    get_one_customer(state) {
      console.log(state.one_customer);
      return state.one_customer;
    },
  },
  actions: {
    // ************frelancers*************
    async req_freelancers({ commit }) {
      const { data } = await Axios.get("freelancers/");
      commit("change_freelancers", data);
    },
    async req_one_freelancer({ commit, dispatch }, username) {
      console.log("this isusernmae");
      const { data } = await Axios.get(`freelancer/${username}/`);
      console.log(data);
      commit("change_one_freelancer", data.data);
      commit("change_job_types", data.types);
      dispatch("freelancer/get_skills", data.data, { root: true });
    },

    async change_freelancer_info(_, obj) {
      await Axios.patch(`change_info/freelancer/${obj.id}/`, obj);
    },

    async remove_freelancer({ commit }, id) {
      await Axios.delete(`delete/freelancer/${id}/`);
      commit("delete_freelancer", id);
    },

    async change_freelancer_job_process(_, info) {
      const { data } = Axios.patch(`change_job_status/${info.id}/`, {
        status: info.status,
      });
      console.log("dispatch", data);
    },

    async change_free_image({state, commit}, image){
     
      const formData = new FormData();
      formData.append("photo", image);
      const {data} = await Axios.patch(`change_image/freelancer/${state.one_freelancer['id']}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      commit("change_freelancer_image", data.photo_url)
    },

    // ***********customers***********

    async req_customers({ commit }) {
      const { data } = await Axios.get("customers/");
      commit("change_customers", data);
    },

    async req_one_customer({ commit }, username) {
      const { data } = await Axios.get(`customer/${username}/`);
      commit("change_one_customer", data);
    },

    async change_customer_info(_, obj) {
      await Axios.patch(`change_info/customer/${obj.id}/`, obj);
    },

    async remove_customer({ commit }, id) {
      await Axios.delete(`delete/customer/${id}/`);
      commit("delete_customer", id);
    },

    async change_cust_image({state, commit}, image){
     
      const formData = new FormData();
      formData.append("photo", image);
      const {data} = await Axios.patch(`change_image/customer/${state.one_customer['id']}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      commit("change_customer_image", data.photo_url)
    },

    // *************jobs***************

    async req_all_jobs({ commit }) {
      const { data } = await Axios.get("all_jobs/");
      console.log(data);
      commit("change_jobs", data);
    },
  },
  mutations: {
    // **********freelancers*************
    change_freelancers(state, new_value) {
      state.freelancers = new_value;
    },

    change_one_freelancer(state, new_value) {
      state.one_freelancer = new_value;
    },

    delete_freelancer(state, id) {
      state.freelancers.splice(
        state.freelancers.findIndex((elm) => elm.id == id),
        1
      );
    },

    add_skill_to_freelancer(state, skill) {
      if (!state.one_freelancer.skills.find((elm) => elm.id == skill.id)) {
        state.one_freelancer.skills.push(skill);
      }
    },

    remove_skills_from_developer(state, id) {
      state.one_freelancer.skills.splice(
        state.one_freelancer.skills.findIndex((elm) => elm.id == id),
        1
      );
    },

    change_freelancer_job_status(state, data) {
      state.one_freelancer.jobs.find((elm) => elm.id == data.job.id).process =
        data.status;
    },
    change_freelancer_image(state, data){
      state.one_freelancer.photo = data
    },

    // ***********customers************

    change_customers(state, new_value) {
      state.customers = new_value;
    },

    change_one_customer(state, new_value) {
      state.one_customer = new_value;
    },

    delete_customer(state, id) {
      state.customers.splice(
        state.customers.findIndex((elm) => elm.id == id),
        1
      );
    },
    add_job_to_customer(state, data) {
      state.one_customer.jobs.push(data);
    },

    change_customer_image(state, data){
      state.one_customer.photo = data
    },
    // *************jobs**************

    change_jobs(state, data) {
      state.jobs = data;
    },
    change_job_types(state, data) {
      state.job_types = data;
    },
  },
};
