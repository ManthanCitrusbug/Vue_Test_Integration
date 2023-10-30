import { createStore } from 'vuex'

export default createStore({
  state: {
    userDetails: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  getters: {
  },
  mutations: {
    setLoggedInUser(state, payload) {
      state.userDetails.username = payload.username;
      state.userDetails.firstName = payload.first_name;
      state.userDetails.lastName = payload.last_name;
      state.userDetails.email = payload.email;
    }
  },
  actions: {
    setLoggedInUser({ commit }, payload) {
      commit('setLoggedInUser', payload)
      const storeData = {
        value: this.state.userDetails,
        expiry: Date.now() + 5 * 60 * 1000
      }
      window.localStorage.setItem('loggedInUser', JSON.stringify(storeData));
    }
  },
  modules: {
  }
})
