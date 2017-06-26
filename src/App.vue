<template>
  <div id="app">
    <mq-header></mq-header>
    <sider-bar></sider-bar>
  </div>
</template>

<script>
import mqHeader from './components/Header'
import SiderBar from './components/Sidebar'
export default {
  name: 'sidebar',
  components: { mqHeader,SiderBar }
}
</script>

<style scoped>

</style>
