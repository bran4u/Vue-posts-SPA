<template>
  <div class="login">
    <NavBar />
    <form class="login__form" @submit.prevent="login">
      <input required v-model="inputEmail" type="email" placeholder="Email"/>
      <span v-if="error"> Wrong Email </span>
      <button class="login__button" type="submit">Login</button>
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
        this.$router.push('./home');

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
.login {
  display: flex;
  justify-content: center;
}

.login__form {
  display: flex;
  margin-top: 100px;
  justify-content: center;
  flex-direction: column;
  width: 20%;
}

.login__button {
  height: 40px;
  color: white;
  margin-top: 20px;
  background-color: #409eff;
  border: 1px solid #409eff;
  transition: background-color 0.5s;
}

.login__button:hover {
  background-color: white;
  color: #409eff;
}
</style>