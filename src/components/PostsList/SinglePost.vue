<template>
  <div class="singlePost">
    <div class="singlePost__item">
      <h2 class="singlePost__title">{{ post.title }}</h2>
      <p class="singlePost__body">{{ post.body }}</p>
    </div>
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


<style scoped>
.singlePost {
  display: flex;
}

.singlePost__item {
  max-height: 200px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
}
</style>