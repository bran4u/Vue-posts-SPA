import axios from 'axios';

export default {
  actions: {
    async getPostsFromApi({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          commit('updatePosts', response.data)
        })
        .catch(error => console.log(error))
    },
  },
  mutations: {
    updatePosts(state, posts){
      state.posts = posts;
    }
  },
  state: {
    posts: [],
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  }
}