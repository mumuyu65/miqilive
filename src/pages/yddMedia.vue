<template>
  <div class="ydd-media">
    <div class="media-header">
        <div class="container">
           <ul class="list-inline">
            <li><router-link to="/yddMedia/mediaHome">首页</router-link></li>
            <li><router-link to="/yddMedia/mediaGlobal">金融说天下</router-link></li>
            <li><router-link to="/yddMedia/mediaTrasaction">交易学堂</router-link></li>
           </ul>
        </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yddMedia'
}
</script>

<style scoped>

    .media-header{
        background: #fff3f3;
        width: 100%;
        height: 50px;

    }

    .media-header ul li{
        padding:10px 30px;
        position: relative;
    }

    .media-header ul li:nth-child(1){
       padding-left:0;
    }

    .media-header ul li::after{
      position: absolute;
      right: 0;
      content:'';
      width:1px;
      height:30%;
      top:15px;
      background-color: #000;
    }

    .media-header ul li:nth-child(3)::after{
      position: absolute;
      right: 0;
      content:'';
      width:0px;
      height:30%;
      top:15px;
      background-color: #000;
    }


    .media-header ul li a{
        font-size:14px;
        color:#000;
        border-bottom:2px solid transparent;
        padding:10px 0;
    }

    .media-header ul li .router-link-active{
        border-bottom: 2px solid #e61f1c;
        color: #e61f1c;
    }

</style>
