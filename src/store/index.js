import { createStore } from 'vuex'
import admin from './admin/admin'
import freelancer from './freelancer/freelancer.js'
import customer from './customer/customer.js'
import auth from './authentication/auth'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin,
    auth,
    freelancer,
    customer

  }
})
