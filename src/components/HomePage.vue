<template>
  <div class="post__list">
    <PostList 
    v-bind:posts="postsWithUsers"
    />
  </div>
</template>

<script>
import PostList from './PostsList/PostList';
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HomePage',
  data() {
    return {
      postsWithUsers: [],
    }
  },
  computed: {
    ...mapGetters(['getPosts', 'getUsers']),
  },
  methods: {
    ...mapActions(['getPostFromApi', 'getCommentsFromApi']),
    getPostWithUsers() {
      this.postsWithUsers = this.getPosts.map(post => ({
        ...post,
        user: this.getUsers.find(user => user.id === post.userId),
      }));
    }
  },
  async mounted() {
    this.getPostFromApi();
    this.getCommentsFromApi();
    this.getPostWithUsers()
  },
  components: {
    PostList,
  }
}
</script>