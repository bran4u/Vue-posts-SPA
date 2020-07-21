<template>
  <div>
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