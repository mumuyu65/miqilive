<template>
  <div class="app">
    <ydd-header></ydd-header>
    <router-view></router-view>
    <ydd-footer></ydd-footer>
  </div>
</template>

<script>
import YddHeader from './components/Header.vue'
import YddFooter from './components/Footer.vue'
export default {
  name: 'ydd',
  components: { YddHeader,YddFooter }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a,a:hover,a:visited,a:link{
  text-decoration: none;
}
</style>
