<template>
  <div class="login">
    <NavBar />
    <form class="login__form" @submit.prevent="login">
      <input required v-model="inputEmail" type="email" placeholder="Email"/>
      <span v-if="error"> Wrong Email </span>
      <button type="submit">Login</button>
    </form>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  name: "LoginPage",
  data() {
    return {
      inputEmail: '',
      error: false,
    }
  },
  methods: {
    ...mapActions(['getUsersFromApi', 'getCommentsFromApi', 'getPostsFromApi']),
    ...mapMutations(['login', 'userCheck']),
    ...mapGetters(['getUsers', 'getUserValidation']),
    login() {

      this.userCheck(this.inputEmail);

        if (!this.getUserValidation) {
          this.error = true;
        } else {
          this.login(this.inputEmail);
          this.$router.push('./home');
        }

    },
  },
  async mounted() {
    this.getPostsFromApi();
    this.getCommentsFromApi();
    this.getUsersFromApi();
  }

}
</script>>

<style scoped>
.login__form {
  margin: 10px;
}
</style>