<template>
  <div class="comment__item">
    <h3 class="comment_name">{{ comment.name }}</h3>
    <p class="comment__text">{{ comment.body }}</p>
    <p class="comment__mail">Email: {{ comment.email }}</p>
  </div>
</template>

<script>
export default {
  props:['comment'],
}
</script>

<style>
.comment__item {
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
}

.comment__text {
  margin-top: 20px;
}

.comment__name {
  font-size: 14px;
  color: grey;
}

.comment__mail {
  font-size: 14px;
}
</style>