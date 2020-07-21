<template>
  <li class="comments__item">
    <p>{{ comment.body }}</p>
  </li>
</template>

<script>
export default {
  props:['comment'],
}
</script>