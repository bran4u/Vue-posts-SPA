import axios from 'axios';

export default {
  actions: {
    async getUsersFromApi({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          commit('setUsers', response.data)
        })
        .catch(error => console.log(error))
    },
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    },
    loginUser(state, loggedUser) {
      state.loggedUser = loggedUser;
    },
    login(state, inputEmail) {
      state.userId = state.users.find(user => user.email === inputEmail).id;
    },
    userCheck(state, inputEmail) {
      state.userValidation = state.users.some(user => user.email === inputEmail);
    },
    logoutValidation(state) {
      state.userValidation = false;
    }
  },
  state: {
    users: [],
    userId: 1,
    userValidation: true,
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getLoggedId(state) {
      return state.userId;
    },
    getUserValidation(state) {
      return state.userValidation;
    }
  }
}