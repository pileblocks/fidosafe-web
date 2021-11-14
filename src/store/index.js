import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { Safe } from "./modules/Safe"
import { Confirmation } from "./modules/Confirmation";

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    Safe, Confirmation
  }
})
