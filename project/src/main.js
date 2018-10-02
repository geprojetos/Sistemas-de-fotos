import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import { appRouter } from './router';
import './assets/css/reset.css';
import './assets/css/fonts.css';
import './assets/css/grid.css';
import './assets/css/container.css';
import './assets/css/buttons.css';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/';
Vue.use(VueRouter);

const myRoutes = new VueRouter({
  routes: appRouter,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: myRoutes,
  render: h => h(App)
})
