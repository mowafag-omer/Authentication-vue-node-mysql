import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  getters: {
    signedIn(state) {
      return state.token !== null
    }
  },  
  mutations: {
    setToken: (state, token) => {
      state.token = token
    },
    destroyToken: (state) => {
      state.token = null
    }
  },
  actions: {
    setToken: (context, token) => {
      context.commit('setToken', token)
    },
    destroyToken: (context) => {
      context.commit('destroyToken')
    }
  },
  plugins: [createPersistedState()]
})
