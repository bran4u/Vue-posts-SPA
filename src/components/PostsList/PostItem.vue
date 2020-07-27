<template>
  <li class="post__item">
    <router-link class="router__link" :to="`/Vue-posts-SPA/post/${post.id}`">{{ post.title }}</router-link>
    <p>{{ post.body }}</p>
    <router-link class="router__link" :to="`/Vue-posts-SPA/user/${post.user.id}`">{{ post.user.name }}</router-link>
  </li>
</template>

<script>
export default {
  props:['post'],
}
</script>

<style>
.post__item {
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
}

.router__link {
  text-decoration: none;
  font-weight: 700;
}

</style>