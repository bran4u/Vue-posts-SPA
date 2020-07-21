<template>
  <div>
    <CommentsItem 
      v-for="comment of comments"
      v-bind:comment="comment"
      v-bind:key="comment.id"
    />
  </div>
</template>


<script>
import CommentsItem from './CommentsItem';
export default {
  props:['comments'],
  components:{
    CommentsItem,
  }
}
</script>


<style>

</style>