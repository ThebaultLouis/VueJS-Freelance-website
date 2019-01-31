<template>
  <div id="app">
    <navbar></navbar>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #B3E5FC;
}
body {
  margin: 0;
}
html {
  margin: 0;
}
</style>
