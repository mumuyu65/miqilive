<template>
    <div class="sidebar">
        <div class="text-center user-logo">
            <a href="javascript:void(0)" id="user_logo">
                <img src="../../static/images/course_t.png" alt="" class="img-circle"/>
                <h6 id="zhibo_account">游客</h6>
            </a>
            <h6 class="text-center">赢豆</h6>
            <img src="../../static/images/gold.png" alt=""/><span id="zhibo_bean" title="">0</span>
        </div>
        <ul class="list-unstyled">
            <div class="divider"></div>
            <li class="text-center active">
              <router-link to="/smallGame">
                  <img src="../../static/images/youxi-icon.png" alt="">
                  <h6>小游戏</h6>
              </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
              <router-link to="news">
                <img src="../../static/images/pencil.png" alt="">
                <h6>新闻与文章</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="bbs">
                    <img src="../../static/images/zhuanjia-icon.png" alt="">
                    <h6>论坛</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
            <router-link to="hangqing">
                <img src="../../static/images/hangqing.png" alt="">
                <h6>行情</h6></router-link></li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="transactions">
                <img src="../../static/images/calendar-icon.png" alt="">
                <h6>交易与开户</h6></router-link></li>
            <div class="divider"></div>
            <li class="text-center">
            <router-link to="smallVideo" >
                <img src="../../static/images/jinrong-icon.png" alt="">
                <h6>小视频</h6></router-link></li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="classes">
                    <img src="../../static/images/kaihu.png"  alt="">
                    <h6>教学</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="economics" >
                    <img src="../../static/images/kechengzhongxin-icon.png"  alt="">
                    <h6>快讯</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="shopmall">
                    <img src="../../static/images/xiazai.png"  alt="">
                    <h6>积分商城</h6>
                </router-link>
            </li>
            <div class="divider"></div>
            <li class="text-center">
                <router-link to="security">
                    <img src="../../static/images/mobile.png"  alt="">
                    <h6>保险</h6>
                </router-link>
            </li>
            <div class="divider"></div>
        </ul>
        <div class="sidebar-divider"></div>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
}
</script>

<style scoped>

</style>
