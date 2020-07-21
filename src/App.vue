<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import {} from 'vuex'
import NavBar from './components/Navbar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
  }
}
</script>

<style>

</style>
