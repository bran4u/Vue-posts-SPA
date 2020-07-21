<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Login</router-link>
      </li>
      <li>
        <router-link to="/home">Posts</router-link>
      </li>
      <li>
        <!-- <router-link :to="`/user/${getInfo.id}`">User</router-link> -->
      </li>
      <li>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
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