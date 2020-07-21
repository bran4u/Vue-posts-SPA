<template>
  <li class="post__item">
    <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
    <p>{{ post.body }}</p>
    <router-link :to="`/user/${post.user.id}`">{{ post.user.name }}</router-link>
  </li>
</template>

<script>
export default {
  props:['post'],
}
</script>


<style>
.post__item {
  padding: 30px;
} 
</style>