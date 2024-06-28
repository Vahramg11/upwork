import axios from "axios";
const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
  });
export default {
    state:{},
    getters:{},
    mutations:{},
    actions:{

        async sign_up(_, obj){
            const {data} = await Axios.post("sign_up/", obj)
            console.log(data);
        }

    },
}

