<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <router-link class="navbar__link" to="/Vue-posts-SPA/home">Posts</router-link>
      </li>
      <li class="navbar__item">
        <router-link class="navbar__link" :to="`/Vue-posts-SPA/user/${id}`">User</router-link>
      </li>
      <li class="navbar__item">
        <router-link @click.native="logoutHandler" class="navbar__link" to="/Vue-posts-SPA/">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      id: '',
    }
  },
  computed: {
    ...mapGetters(['getLoggedId']),
  },
  methods: {
    ...mapMutations(['logoutValidation']),
    logoutHandler() {
      this.logoutValidation();
    }
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