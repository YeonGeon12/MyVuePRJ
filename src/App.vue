<template>
  <div id="app">
    <h1>Vue.js 3 Provide/Inject 예제</h1>
    <ThemeProvider />
  </div>
</template>

<script>
import ThemeProvider from './components/ThemeProvider.vue'

export default {
  name: 'App',
  components: {
    ThemeProvider
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
