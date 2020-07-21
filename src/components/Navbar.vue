<template>
  <nav>
    <ul class="navbar__list">
      <li class="navbar__item">
        <router-link to="/">Login</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/home">Posts</router-link>
      </li>
      <li class="navbar__item">
        <!-- <router-link :to="`/user/${getInfo.id}`">User</router-link> -->
      </li>
      <li class="navbar__item">
        <router-link to="/">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      id: this.getInfo.id,
    }
  },
  computed: {
    ...mapGetters('getInfo')
  },
}
</script>


<style scoped>
.navbar__list {
  display: flex;
  list-style-type: none;
}

.navbar__item {
  margin-left: 30px;
}
</style>