<template>
  <nav>
    <ul class="navbar__list">
      <li class="navbar__item">
        <router-link class="navbar__link" to="/home">Posts</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" :to="`/user/${id}`">User</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" to="/">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      id: '',
    }
  },
  computed: {
    ...mapGetters(['getLoggedId']),
  },
  created() {
    this.id = this.getLoggedId;
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

.navbar__link {
  text-decoration: none;
}
</style>