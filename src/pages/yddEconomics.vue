<template>
  <div class="Economics">
    <div class="economics-header">
        <div class="container">
           <ul class="list-inline">
            <li><router-link to="/yddEconomics/economicsZhibo">快讯直播</router-link></li>
            <li><router-link to="/yddEconomics/economicsNews">新闻</router-link></li>
            <li><router-link to="/yddEconomics/economicsCalendar" >财经日历</router-link></li>
            <li><router-link to="/yddEconomics/economicsTeachers" >名师专栏</router-link></li>
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
  name: 'yddEconomics'
}
</script>

<style scoped>
    .economics-header{
            background: #fff3f3;
            width: 100%;
            height: 50px;

    }

    .economics-header ul li{
        padding:10px 30px;
        position: relative;
    }

    .economics-header ul li:nth-child(1){
       padding-left:0;
    }

    .economics-header ul li::after{
      position: absolute;
      right: 0;
      content:'';
      width:1px;
      height:30%;
      top:15px;
      background-color: #000;
    }

    .economics-header ul li:nth-child(4)::after{
      position: absolute;
      right: 0;
      content:'';
      width:0px;
      height:30%;
      top:15px;
      background-color: #000;
    }


    .economics-header ul li a{
        font-size:14px;
        color:#000;
        border-bottom:2px solid transparent;
        padding:10px 0;
    }

    .economics-header ul li .router-link-active{
        border-bottom: 2px solid #e61f1c;
        color: #e61f1c;
    }
</style>
