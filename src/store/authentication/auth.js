import router from "@/router";
import axios from "axios";
import VueCookies from 'vue-cookies';
const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});
export default {
    state: {
        user: null
    },
    getters: {},
    mutations: {
        change_user(state, obj){
            state.user = obj
        }
    },
    actions: {
        async sign_up(_, obj) {
            try {
                const { data } = await Axios.post("sign_up/", obj)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },

        async sign_in({ dispatch }, obj) {
            try {
                const { data } = await Axios.post("api/token/", obj)
                VueCookies.set('refresh', data.refresh, "1d", {
                    secure: true,
                    sameSite: 'Strict',
                });
                VueCookies.set('access', data.access, "10m", {
                    secure: true,
                    sameSite: 'Strict',
                });
                dispatch("get_user")
            } catch (error) {
                console.log(error);
            }
        },
        async log_out() {
            const config = {
                headers: {
                    "Authorization": `Bearer ${VueCookies.get("access")}`,
                },
            }
            const { data } = await Axios.post("log_out/", { "refresh": VueCookies.get("refresh") }, config)
            console.log(data);
        },

        async get_user({ commit }) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${VueCookies.get("access")}`,
                },
            }
            const user = await Axios.get("user/", config)
            commit("change_user", user.data)
            console.log(user.data);
            switch(user.data.user_type){
                case "freelancer":
                    alert()
                    router.push("/freelancer")
                    break
                case "admin":
                    router.push("/admin")
                    break
                case "customer":
                    router.push("/customer")
                    break
                default:
                    router.push("/")
            }
        }
    },
}

