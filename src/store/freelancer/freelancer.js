import VueCookies from 'vue-cookies';
import axios from 'axios';
import router from "@/router";
import store from '..';

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
    getters: {

    },
    actions: {
        async get_skills({ commit }, user) {
            const { data } = await Axios.get(`skills/${user.id}/`)
            commit("change_skills", data)
        },
        async add_skills(_, info) {
            await Axios.post(`add_skill/freelancer/${router.currentRoute._value.params.username}/`, info.map(elm=>{ return {id: elm.id} }))
        },
        async delete_skill_from_freelancer(_, id){

            let a = await Axios.delete(`skills/remove/${router.currentRoute._value.params.username}/${id}/`, )
            console.log(a);


        }
    },
    mutations: {
        change_skills(state, info) {
            state.skills = info
        },
        remove_skills_from_developer(state, id) {
            console.log(store.commit("admin/remove_skills_from_developer", id))
    }
}
}