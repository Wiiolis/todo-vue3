<template>
  <header>Todo App</header>
  <dashboard/>
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
  color: #2c3e50;
  margin-top: 60px;
}

body {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

header {
  margin-bottom: 50px;
}
</style>
