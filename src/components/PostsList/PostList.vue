<template>
  <div class="posts">
    <ul class="post__list">
      <PostItem
        v-for="post of posts"
        v-bind:post="post"
        v-bind:key="post.id"
      />
    </ul>
  </div>
</template>

<script>
import PostItem from './PostItem';
export default {
  props: ['posts'],
  components: {
    PostItem
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
}

.post__list {
  list-style: none;
}
</style>