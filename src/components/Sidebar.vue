<template>
   <div class="sidebar">
        <div class="text-center user-logo">
            <a href="javascript:void(0)">
                <img src="../../static/images/course_t.png" alt="" class="img-circle"  data-toggle="modal" data-target="#loginModal"/>
                <h6>{{user.Nick}}</h6>
            </a>
            <h6 class="text-center">赢豆</h6>
            <img src="../../static/images/gold.png" alt=""/>
                <span title="">{{user.Beans}}</span>
        </div>
        <ul class="list-unstyled">
            <div class="divider"></div>
            <li class="text-center">
              <router-link to="/">
                  <img src="../../static/images/youxi-icon.png" alt="">
                  <h6>小游戏</h6>
              </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
              <router-link to="/news">
                <img src="../../static/images/pencil.png" alt="">
                <h6>新闻与文章</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="/bbs">
                    <img src="../../static/images/zhuanjia-icon.png" alt="">
                    <h6>论坛</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
            <router-link to="/hangqing">
                <img src="../../static/images/hangqing.png" alt="">
                <h6>行情</h6></router-link></li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="/transactions">
                <img src="../../static/images/calendar-icon.png" alt="">
                <h6>交易与开户</h6></router-link></li>
            <div class="divider"></div>
            <li class="text-center">
            <router-link to="/smallVideo" >
                <img src="../../static/images/jinrong-icon.png" alt="">
                <h6>小视频</h6></router-link></li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="/classes">
                    <img src="../../static/images/kaihu.png"  alt="">
                    <h6>教学</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="/economics" >
                    <img src="../../static/images/kechengzhongxin-icon.png"  alt="">
                    <h6>快讯</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="/shopmall">
                    <img src="../../static/images/xiazai.png"  alt="">
                    <h6>积分商城</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="/security">
                    <img src="../../static/images/mobile.png"  alt="">
                    <h6>保险</h6>
                </router-link>
            </li>
            <div class="divider"></div>
        </ul>
        <div class="sidebar-divider"></div>
         <!--登录和注册部分-->
        <login></login>
    </div>
</template>

<script>
import Login from '@/pages/login'

import { mapGetters } from 'vuex'

export default {
  name: 'sidebar',
  components: { Login },
  mounted (){
    this.init();
  },
  computed: mapGetters({
      user: 'getUser',
  }),
  methods:{
    init (){
      if(window.localStorage.getItem("user")){
        this.$store.dispatch('changeUser',JSON.parse(window.localStorage.getItem("user")));
     }
    },
  }
}
</script>

<style scoped>

.router-link-active{
   background-color:#d1201d;
   text-decoration:none;
}

</style>
