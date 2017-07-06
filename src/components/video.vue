<template>
  <video controls="controls" autoplay="autoplay" class="player">
        您当前的浏览器不支持该视频播放
    <source v-bind:src="test"></source>
  </video>
</template>

<script>
export default {
  name: 'video',
  props:['msg'],
  data (){
    return {
      test:'',
    }
  },
  watch: {
   'msg': function (n, o) {
      this.test = n;
   }
  },
}
</script>
