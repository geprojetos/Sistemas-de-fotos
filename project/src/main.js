import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { appRouter } from './router';
import './assets/css/reset.css';
import './assets/css/fonts.css';

Vue.use(VueRouter)

const myRoutes = new VueRouter({
  routes: appRouter,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: myRoutes,
  render: h => h(App)
})
