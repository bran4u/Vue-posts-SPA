import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router';
import Axios from 'axios';

Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
