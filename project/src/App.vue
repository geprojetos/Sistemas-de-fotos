<template>
  <section id="app">

    <app-menu />
    <router-view></router-view>
  </section>
</template>

<script>
import Menu from './components/shared/menu/Menu';

export default {

  components: {
    "app-menu": Menu
  }
}
</script>

<style>

</style>
