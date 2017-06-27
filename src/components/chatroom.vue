<template>
    <div class="chat">
        <ul class="list-inline">
            <li><h4 style="color:#f00;">实时聊天</h4></li>
            <li class="pull-right">
                <h4>在线人数：<span>{{userOnline}}</span></h4>
            </li>
        </ul>
        <div class="chat-inner">
            <div class="inner-container">

            </div>
        </div>
        <ul class="list-inline">
            <li class="chat-icon">
                <img src="../../static/images/biaoqing.png" alt=""  id="chat_icon" />
                <div class="chat-face" v-show="showFace">
                    <div class="chat-face-inner">
                        <div class="chat-face-content">
                          <img v-bind:src="face.url" v-for="face in chatFaces"/>
                        </div>
                    </div>
                </div>
            </li>
            <li class="chat-icon" @click="toggleFace()"><img src="../../static/images/qingpin.png" alt=""></li>
        </ul>
        <div contenteditable="true" class="chat-content"></div>
        <ul class="list-inline">
            <li>
                <h5 style="color:#c48b4d;">直播间投资建议仅供参考</h5>
                <h6 style="color:#f00;">400-872-5188</h6>
            </li>
            <li class="pull-right">
                <button class="btn btn-send">
                    <img src="../../static/images/send.png" alt="send"/>
                    <span>发送</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

import Jsonp from 'jsonp'

export default {
  name: 'chatRoom',
  data () {
    return {
      userOnline: 0,
      chatFaces:[],
      showFace: false
    }
  },
  mounted (){
    this.initFace();
  },
  methods:{
    //聊天图标
    initFace (){
      let that =this;
      Jsonp('https://api.weibo.com/2/emotions.json?source=1362404091',function (err, res) {
          if(res.code ==1){
            that.chatFaces=res.data;
          }
        });
    }
  },
}
</script>

<style scoped>
    .chat .chat-face-content img{
        padding:10px;
        cursor: pointer;
    }
</style>
