import Vue from 'vue';
import Router from 'vue-router';
import App from './App';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/Vue-posts-SPA/home',
      component: () => import('./components/HomePage.vue')
    },
    {
      path: '/Vue-posts-SPA/user',
      component: () => import('./components/UserPage.vue')
    },
    {
      path:'/Vue-posts-SPA/post/:id',
      component: () => import('./components/PostsList/SinglePost.vue') 
    },
    {
      path: '/Vue-posts-SPA/user/:id',
      component: () => import('./components/UserPage.vue')
    },
  ]
})