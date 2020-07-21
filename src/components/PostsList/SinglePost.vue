<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
        <CommentsLists 
        v-bind:comments="comments"
        />
  </div>
</template>

<script>
import CommentsLists from './CommentsList/CommentsList';
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
      comments: [],
    }
  },
  components: {
    CommentsLists
  },
  computed: {
    ...mapGetters(['getPosts', 'getComments'])
  },
  methods: {
    ...mapActions(['getCommentsFromApi'])
  },
  created() {
    this.post = this.getPosts.find(post => post.id === Number(this.id));
    this.comments = this.getComments.filter(comment => comment.postId === Number(this.id));
  },
}
</script>