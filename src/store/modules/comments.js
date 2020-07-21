import axios from 'axios';

export default {
  actions: {
    async getCommentsFromApi({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
          commit('updateComments', response.data)
        })
        .catch(error => console.log(error))
    },
  },
  mutations: {
    updateComments(state, comments){
      state.comments = comments;
    }
  },
  state: {
    comments: [],
  },
  getters: {
    getComments(state) {
      return state.comments;
    },
  }
}