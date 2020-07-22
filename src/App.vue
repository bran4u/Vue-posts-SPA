<template>
  <div class="app" id="app">
    <div v-if="this.getUserValidation">
      <NavBar />
      <router-view />
    </div>
    <div v-if="!this.getUserValidation" class="login">
      <form class="login__form" @submit.prevent="login">
        <input required v-model="inputEmail" type="email" placeholder="Email"/>
        <span v-if="error"> Wrong Email </span>
        <button class="login__button" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import NavBar from './components/Navbar'
export default {
  name: 'App',
  data() {
    return {
      inputEmail: '',
      error: false,
      userValidation: false,
    }
  },
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['getUsers', 'getUserValidation']),
  },
  methods: {
    ...mapActions(['getUsersFromApi', 'getCommentsFromApi', 'getPostsFromApi']),
    ...mapMutations(['login', 'userCheck']),
    login() {
      this.userCheck(this.inputEmail);
      if (this.getUserValidation) {
        this.userValidation = true;
        this.error = false
        this.$router.push('./home');
      } else {
        this.error = true
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