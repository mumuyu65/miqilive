<template>
  <div class="main">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'BBS',
  data () {
    return {
        msg:'this is the bbs页面 !'
    }
  },
}
</script>

<style scoped>

</style>
