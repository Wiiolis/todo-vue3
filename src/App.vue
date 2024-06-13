<template>
  <header>Todo App</header>
  <dashboard/>

  <router-link :to="{name:'dashboard'}">Home</router-link>
  <footer>Todo App Footer</footer>
</template>

<script>
import dashboard from './view/dashboard.vue'

export default {
  name: 'App',
  components: {
    dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
