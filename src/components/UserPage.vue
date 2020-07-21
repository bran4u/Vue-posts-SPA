<template>
  <div>
    <h1>User information</h1>
    <h2>name: {{ users.name }}</h2>
    <p>Username: {{users.username}}</p>
    <p>Email: {{users.email}}</p>
    <p>Phone {{users.phone}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
      users: {},
    }
  },
  created() {
    this.users = this.getUsers.find(user => user.id === Number(this.id));
  },
  computed: {
    ...mapGetters(['getUsers'])
  }
}
</script>