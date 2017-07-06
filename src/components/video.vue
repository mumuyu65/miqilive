<template>
  <video controls="controls" autoplay="autoplay" class="player" name="media" v-bind:src="test">
    your browser does not support the video tag！
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
