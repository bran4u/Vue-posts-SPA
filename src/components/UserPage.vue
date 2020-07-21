<template>
  <div class="user__page">
    <h1>User information</h1>
    <p>Name: {{ users.name }}</p>
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

<style scoped>
.user__page {
  max-height: 200px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
}
</style>