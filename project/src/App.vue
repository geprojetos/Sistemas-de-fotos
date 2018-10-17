<template>
  <section id="app">

    <app-menu :rotas="routes" />
    <router-view></router-view>
  </section>
</template>

<script>
import Menu from './components/shared/menu/Menu';
import { appRouter } from './router.js'

export default {

  data() {

    return {
      routes: appRouter.filter(route => route.menu)
    }
  },

  components: {
    "app-menu": Menu
  }
}
</script>

<style>

</style>
