<template>
  <div class="main classes">
   <div class="zj-list">
        <div class="inner-container">
            <h4 style="border-left:2px solid #f00;"><span style=" margin-left:10px;">教学课程</span></h4>
            <ol class="list-unstyled">
                <li v-for="video in videoes" class="report-item" @click="playVideo(video)">
                    <img v-bind:src="video.coverurl" />
                    <h5>{{video.title}}</h5>
                    <div class="backup"></div>
                </li>
            </ol>
        </div>
    </div>
    <div class="zhibo">
        <my-video v-bind:msg="showVideo.videourl"></my-video>
        <h4 style="padding-left:20px;">{{showVideo.title}}</h4>
        <ol class="list-inline" style="padding-left:20px;">
            <li><h4>可看人数：245</h4></li>
            <li><h4>点赞数：45</h4></li>
            <li><h4>评论数：785</h4></li>
        </ol>
        <div style="width:100%; height:1px; background-color:#4b4b4b;"></div>
        <div style="padding-left:20px; height:260px;">
            <h4 style="border-left:2px solid #f00;"><span style="margin-left:10px;">课程详情</span></h4>
            <h5 style="margin-left:20px;">{{showVideo.intro}}</h5>
        </div>
        <gift></gift>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

import Gift from '@/components/Gift'

import myVideo from '@/components/Video'

import axios from 'axios'

export default {
  name: 'Classes',
  //组件中data必须是函数
  data () {
    return {
        videoes:[],
        showVideo:'',
    }
  },
  components:{ Gift,myVideo },
  mounted(){
    this.initData();
  },
  methods:{
    initData (){
        let that = this;
        let params={
            free:1,
            flag:0,
            count:13
        };

        api.getVideoes(params).then(function (res) {
             if(res.data.Code ==3){
                that.videoes = res.data.Data.Detail;

                that.showVideo = that.videoes[0];
             }
             else{
                alert(res.data.Msg);
             }
          })
          .catch(function (error) {
             console.log(error);
          });
    },

    playVideo(item){
        this.showVideo = item;
    }


  }

}
</script>

<style scoped>
    .classes .report-item{
        height:280px;
        overflow:hidden;
        padding:20px 10px;
        position:relative;
        cursor:pointer;
    }

    .classes .report-item>img:nth-child(1){
        width:100%;
        height:90%;
    }

    .classes .report-item .backup{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.5) url('../../static/images/off-button.png') no-repeat center center;
        transition:height 0.8s;
    }

    .classes .report-item:hover .backup{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:0;
        background:rgba(0,0,0,0.5) url('../../static/images/off-button.png') no-repeat center center;
    }

</style>
