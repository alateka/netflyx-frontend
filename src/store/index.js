import { createStore } from 'vuex'

export default createStore({
  state: {
    login: false
  },
  getters: {
    isLogin(state) {
      return state.login
    }
  },
  mutations: {
    setLogin(state, login) {
      state.login = login
    }
  },
  actions: {
    setLoginAction(context, login) {
      context.commit("setLogin", login)
    }
  },
  modules: {
  }
})
