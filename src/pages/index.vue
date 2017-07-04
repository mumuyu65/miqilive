<template>
  <div class="main">
     <div class="zj-list">
        <div class="inner-container">
          <ul class="list-inline">
            <li><h4>疯狂猜涨跌</h4></li>
            <li class="pull-right">
              <router-link to="/shopmall" style="color:#fff; text-decoration:none;"><h4>积分商城</h4></router-link></li>
          </ul>
           <iframe src="http://yingdedao.com" width="760px" frameborder="0" height="1300px" scrolling="yes" id="small_game" ></iframe>
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
        <gift></gift>
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
import * as Player from '@/js/aodianyun.js'

import Gift from '@/components/Gift'

import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'SmallGame',
  mounted (){
    this.initData();

    this.zoomEle(document.getElementById("small_game"),0.47,0.47);
  },
  components:{ Gift },
  methods: {
    //直播
    initData (){
      let that = this;
      api.getZhibo().then(function(res){
        if(res.data.Code ==3){
          let url = res.data.Data[0].url;
          let objectPlayer = new Player.aodianPlayer({
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

       //轮播图
         $('#myCarousel').carousel({
            interval: 2000
        });
    },

    getBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera){return "Opera"}; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1){return "FF";} //判断是否Firefox浏览器
        if (userAgent.indexOf("Safari") > -1){return "Safari";} //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera){return "IE";} ;
        //判断是否IE浏览器
    },

    zoomEle(el, xScale, yScale) {
        var name = this.getBrowser();
        var style = el.getAttribute('style') || "";
        if(name=="IE") {
            if(document.compatMode == "CSS1Compat"){//模式匹配 解决ie8下兼容模式
                el.style.width = el.clientWidth * 2.0;
                el.style.height = el.clientHeight * 2.0;
            }
            el.style.zoom = xScale;
        }else if(name=="FF"){
            el.style.transform = 'scale(' + xScale + ', ' + yScale + ')';
            el.style.transformOrigin = '0px 0px';
        }else {
            el.setAttribute('style', style + '-webkit-transform: scale(' + xScale + ', ' +  yScale + '); -webkit-transform-origin: 0px 0px;');
        }
    },
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
