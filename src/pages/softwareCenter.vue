<template>
  <div class="software text-center">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts>
        <div class="page-1 page">
          <img src="../../static/sof-img/abc1.jpg">
        </div>
        <div class="page-2 page">
           <img src="../../static/sof-img/abc2.jpg">
        </div>
        <div class="page-3 page">
            <img src="../../static/sof-img/abc3.jpg">
        </div>
        <div class="page-4 page">
            <img src="../../static/sof-img/abc4.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'softwareCenter',
  data () {
    return {
      opts: {
        start: 0,
        dir: 'v',
        loop: false,
        duration: 500,
        stopPageScroll: true,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  }
}
</script>

<style scoped>
  .fullpage-container{
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
  }
</style>
