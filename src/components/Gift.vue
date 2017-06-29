<template>
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
</template>

<script>

import API from '@/api/API'
//实例化api
const api = new API();

import { mapGetters } from 'vuex'

export default {
  name: 'gift',
  data () {
    return {
        lastGiftNum:1,
    }
  },
  mounted (){
    this.initData();
  },
  computed: mapGetters({
      giftNum: 'getGiftNum',
      giftSelected: 'getGiftSelected',
      sendGift:'isSendGift',
      gifts:'getGifts'
  }),
  methods: {
    initData() {
        //奖品展示
        let that = this;
        api.getGift().then(function(res){
          if(res.data.Code ==3){
            let prices = res.data.Data;
            for(let i in prices){
              prices[i].isSelected = false;
            }
            //that.gifts = prices;
            that.$store.dispatch('changeGifts',prices);
          }
        }).catch(function(err){
          console.log(err);
        });

        this.lastGiftNum = this.giftNum;
    },


    //选择奖品
    selectedGift (gift){
      for(let i in this.gifts){
        this.gifts[i].isSelected = false;
      }
      gift.isSelected = !gift.isSelected;

      this.$store.dispatch('changeGiftSelected',gift.id);
    },
    //奖品个数
    addCount (){
      this.lastGiftNum++;
      this.$store.dispatch('changeGiftNum',this.lastGiftNum);
    },

    //送礼
    giftSend (){
      let lastGiftNum=this.lastGiftNum;
      this.$store.dispatch('changeGiftSelected',this.giftSelected);
      this.$store.dispatch('changelastGiftNum',lastGiftNum);
      if(window.localStorage.getItem("user")){
        this.$store.dispatch("sendGift",true);
      }
      else{
        alert("未登录,不可以发送礼物的哦!");
      }
    }

  }
}
</script>

<style scoped>
</style>
