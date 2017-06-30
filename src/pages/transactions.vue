<template>
  <div class="main">
    <div class="zj-list">
      <div class="inner-container">
         <ol class="list-unstyled">
              <li class="report-item" >
                  <div class="media">
                      <a class="media-left">
                          <img alt="中阳证券" src="../../static/images/zhongyang.png" />
                      </a>
                      <div class="media-body">
                      <h4 class="media-heading">
                          <a></a>
                      </h4>
                      <p></p>
                      </div>
                  </div>
              </li>
              <li class="report-item" >
                  <div class="media">
                      <a class="media-left">
                          <img alt="中阳证券" src="../../static/images/jiuzhou.png" />
                      </a>
                      <div class="media-body">
                      <h4 class="media-heading">
                          <a></a>
                      </h4>
                      <p></p>
                      </div>
                  </div>
              </li>

        </ol>
      </div>
    </div>
    <div class="zhibo">
        <div style="padding:0 10px;">
            <h6>行情/k线图</h6>
            <h3 class="text-center"></h3>
        </div>
        <div class="report-divider"></div>
        <!--新浪微博等-->
        <ol class="list-inline" style="padding:0 10px;">
            <li class="pull-right" style="margin-top:10px;">
                <a href="#"><img src="../../static/images/qq.png" style="width:20px;"/></a>
                <a href="#"><img src="../../static/images/sina.png" style="width:20px;"/></a>
                <a href="#"><img src="../../static/images/qqzone.png" style="width:20px;"/></a>
                <a href="#"><img src="../../static/images/wechat.png" style="width:20px;"/></a>
            </li>
        </ol>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'Transactions',
  data () {
    return {
        msg:'this is the transactions页面 !'
    }
  },
}
</script>

<style scoped>

</style>
