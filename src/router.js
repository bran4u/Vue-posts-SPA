import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './components/LoginPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LoginPage,
    },
    {
      path: '/home',
      component: () => import('./components/HomePage.vue')
    },
    {
      path: '/user',
      component: () => import('./components/UserPage.vue')
    },
    {
      path:'/post/:id',
      component: () => import('./components/PostsList/SinglePost.vue') 
    },
    {
      path: '/user/:id',
      component: () => import('./components/UserPage.vue')
    },
  ]
})