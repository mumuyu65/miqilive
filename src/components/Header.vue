<template>
  <div class="header">
    <div class="container">
      <div class="nav-left">
        <ul class="list-inline">
          <li><router-link to="/yddEconomics" class="cur">赢资讯</router-link></li>
          <li><router-link to="/yddMedia">德媒体</router-link></li>
          <li><router-link to="/yddZhibo">道直播</router-link></li>
          <li><router-link to="/"><img src="../../static/win/images/logo.png"></router-link></li>
          <li><router-link to="/softwareCenter">软件中心</router-link></li>
          <li><router-link to="/">钱阁</router-link></li>
          <li><router-link to="/">金融超市</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style scoped>
  .header {
    height: 70px;
    background: url(../../static/images/bg.png) repeat-x;
    width: 100%;
    overflow:hidden;
  }

  .header .nav-left ul li {
    line-height: 68px;
    margin-right:80px;
  }

  .header .nav-left ul li:nth-last-child(1){
    margin-right:0px;
  }

  .header .nav-left ul li a {
    font-size: 18px;
    color: #fff;
    line-height: 70px;
    display: inline-block;
  }
</style>
