<template>
  <div class="main">
     <div class="zj-list">
        <div class="inner-container">
          <ul class="list-inline">
            <li><h4>疯狂猜涨跌</h4></li>
            <li class="pull-right">
              <router-link to="/shopmall" style="color:#fff; text-decoration:none;"><h4>积分商城</h4></router-link></li>
          </ul>
           <iframe src="" width="760px" frameborder="0" height="1300px" scrolling="yes" id="small_game" ></iframe>
             <div class="small-game">
                <ul id="myTab" class="list-inline">
                    <li class="active">
                        <a href="#gameRank" data-toggle="tab">
                            游戏排名
                        </a>
                    </li>
                    <li><a href="#joinRecord" data-toggle="tab" >参与记录</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="gameRank">
                        <ul class="list-inline">
                            <li>
                                <img src="../../static/images/game_1.png" alt="" />
                            </li>
                            <li>苗苗</li>
                            <li class="pull-right">
                                1014000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>
                                <img src="../../static/images/game_2.png" alt="" />
                            </li>
                            <li>洋洋</li>
                            <li class="pull-right">
                                1010000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>
                                <img src="../../static/images/game_3.png" alt="" />
                            </li>
                            <li>小曲</li>
                            <li class="pull-right">
                                910000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li style="position: relative;">
                                <img src="../../static/images/game.png" alt="" />
                                <span style="position: absolute; left:17px;top:12px;">4</span>
                            </li>
                            <li>传栋</li>
                            <li class="pull-right">
                                860000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li style="position: relative;">
                                <img src="../../static/images/game.png" alt="" />
                                <span style="position: absolute; left:17px;top:12px;">5</span>
                            </li>
                            <li>红超</li>
                            <li class="pull-right">
                                810000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li style="position: relative;">
                                <img src="../../static/images/game.png" alt="" />
                                <span style="position: absolute; left:17px;top:12px;">6</span>
                            </li>
                            <li>楠楠</li>
                            <li class="pull-right">
                                780000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li style="position: relative;">
                                <img src="../../static/images/game.png" alt="" />
                                <span style="position: absolute; left:17px;top:12px;">7</span>
                            </li>
                            <li>小章</li>
                            <li class="pull-right">
                                720000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="joinRecord">
                        <ul class="list-inline">
                            <li>苗苗</li>
                            <li class="pull-right">
                                1014000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>洋洋</li>
                            <li class="pull-right">
                                1010000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>小曲</li>
                            <li class="pull-right">
                                910000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>传栋</li>
                            <li class="pull-right">
                                860000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>红超</li>
                            <li class="pull-right">
                                810000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>楠楠</li>
                            <li class="pull-right">
                                780000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                        <ul class="list-inline">
                            <li>小章</li>
                            <li class="pull-right">
                                720000
                                <img src="../../static/images/gold.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
              </div>
        </div>
    </div>
    <div class="zhibo">
        <div id="player" class="player">

        </div>
        <div class="price">
            <div class="choice">
              <div id="myCarousel_price" class="carousel slide">
                  <!-- 轮播（Carousel）项目 -->
                  <div class="carousel-inner">
                      <div class="item active">
                          <ol class="list-inline inner-content">
                            <li v-for="gift in gifts" v-bind:class="{active:gift.isSelected}" @click="selectedGift(gift)">
                              <img v-bind:src="gift.imgurl" alt="">
                              <p>{{gift.name}}</p>
                              <p><img src="../../static/images/gold.png" alt="" /><span>{{gift.price}}</span></p>
                             </li>
                          </ol>
                      </div>
                  </div>
                  <!-- 轮播（Carousel）导航 -->
                  <a class="carousel-control left" href="#myCarousel_price"
                     data-slide="prev">
                      <img src="../../static/images/jt_left.png" alt="">
                  </a>
                  <a class="carousel-control right" href="#myCarousel_price"
                     data-slide="next">
                      <img src="../../static/images/jt_right.png" alt="">
                  </a>
              </div>
              <ul class="list-unstyled">
                  <li>
                      <input class="gift-num" v-model="lastGiftNum" type="text" />
                      <div class="count" @click="addCount()"></div>
                      <img src="../../static/images/button-red.png" alt=""/>
                      <div class="gift-btn" @click="giftSend()"></div>
                  </li>
                  <li style="margin-top:20px;">
                      <img src="../../static/images/gold.png" alt="" /><span style="margin-right:20px;">120</span>
                      <img src="../../static/images/button-green.png" alt="">
                  </li>
              </ul>
            </div>
        </div>
        <div class="zhibo-carousel">
            <div id="myCarousel" class="carousel slide">
                <!-- 轮播（Carousel）项目 -->
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="../../static/uploads/ads/20160725141644_285.png" alt="First slide">
                    </div>
                    <div class="item">
                        <img src="../../static/uploads/ads/20160808175709_864.png" alt="Second slide">
                    </div>
                    <div class="item">
                        <img src="../../static/uploads/ads/20160816171126_575.png" alt="Third slide">
                    </div>
                    <div class="item">
                        <img src="../../static/uploads/ads/20160816171217_771.png" alt="Four slide">
                    </div>
                    <div class="item">
                        <img src="../../static/uploads/ads/20170221121908_576.png" alt="Five slide">
                    </div>
                    <div class="item">
                        <img src="../../static/uploads/ads/20170221121919_573.png" alt="Six slide">
                    </div>
                    <div class="item">
                        <img src="../../static/uploads/ads/tanads001.png" alt="Seven slide">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import * as aodianPlayer from '@/js/aodianyun.js'

import API from '@/api/API'
//实例化api
const api = new API();

import { mapGetters } from 'vuex'

export default {
  name: 'SmallGame',
  data () {
    return {
        gifts: [],
    }
  },
  mounted (){
    this.initData();
    this.playZhibo();
  },
  computed: mapGetters({
      giftNum: 'getGiftNum',
      giftSelected: 'getGiftSelected',
      lastGiftNum:'getLastGiftNum'
  }),
  methods: {
    initData() {
        //轮播图
         $('#myCarousel').carousel({
            interval: 2000
        });

        //奖品展示
        let that = this;
        api.getGift().then(function(res){
          if(res.data.Code ==3){
            let prices = res.data.Data;
            for(let i in prices){
              prices[i].isSelected = false;
            }
            that.gifts = prices;

          }
        }).catch(function(err){
          console.log(err);
        });

        this.lastGiftNum = this.giftNum;
    },

    //直播
    playZhibo (){
      let that = this;
      api.getZhibo().then(function(res){
        if(res.data.Code ==3){
          let url = res.data.Data[0].url;
          let objectPlayer = new aodianPlayer({
              container: 'player', //播放器容器ID，必要参数
              rtmpUrl: url, //控制台开通的APP rtmp地址，必要参数
              width: '858', //播放器宽度，可用数字、百分比等
              height: '454', //播放器高度，可用数字、百分比等
              autostart: true, //是否自动播放，默认为false
              bufferlength: '3', //视频缓冲时间，默认为3秒。hls不支持！手机端不支持
              maxbufferlength: '2', //最大视频缓冲时间，默认为2秒。hls不支持！手机端不支持
              stretching: '1', //设置全屏模式,1代表按比例撑满至全屏,2代表铺满全屏,3代表视频原始大小,默认值为1。hls初始设置不支持，手机端不支持
              controlbardisplay: 'enable', //是否显示控制栏，值为：disable、enable默认为disable。
              isfullscreen: true, //是否双击全屏，默认为true
          });
        }else {
              alert("无法请求到直播地址......");
          }
      }).catch(function(err){
        console.log(err);
      });
    },

    //选择奖品
    selectedGift (gift){
      for(let i in this.gifts){
        this.gifts[i].isSelected = false;
      }
      gift.isSelected = !gift.isSelected;

      this.$store.dispatch('changeGiftSelected',this.giftSelected);
    },
    //奖品个数
    addCount (){
      this.$store.dispatch('changeGiftNum',this.giftNum);
      this.lastGiftNum=this.giftNum;
    },

    //送礼
    giftSend (){
      let lastGiftNum=this.lastGiftNum;
      this.$store.dispatch('changeGiftSelected',this.giftSelected);
      this.$store.dispatch('changelastGiftNum',lastGiftNum);
      if(window.localStorage.getItem("user")){
        console.log('sendGift');
        this.$store.dispatch("sendGift",true);
      }
      else{
        alert("未登录,不可以发送礼物的哦!");
      }
    }

  },

}
</script>

<style scoped>
.small-game #myTab{
  background-color:#000;
}

.small-game #myTab>li>a{
  color:#fff;
  text-decoration:none;
}

.zhibo-carousel .carousel-inner .item>img{
  height:450px;
}

</style>
