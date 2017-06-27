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
                <img src="../../static/images/biaoqing.png" alt="" @click="toggleFace()"/>
                <div class="chat-face" v-show="showFace">
                    <div class="chat-face-inner">
                        <div class="chat-face-content">
                          <img v-bind:src="face.url" v-for="face in chatFaces" @click="faceSelect(face)" />
                        </div>
                    </div>
                </div>
            </li>
            <li class="chat-icon"><img src="../../static/images/qingpin.png" alt="" @click="clear()" /></li>
        </ul>
        <input class="chat-content" @keyup.enter="sendContent()" v-model="chatContent" />
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

import { mapGetters } from 'vuex'

export default {
  name: 'chatRoom',
  data () {
    return {
      chatFaces:[],
      showFace: false,
      selectedFace:'',
      chatContent:'',
      ws:null,
      user:{},
    }
  },
  mounted (){
    this.initFace();

    this.initChat();
  },
   computed: mapGetters({
      userOnline: 'getOnline'
  }),
  methods:{
    //聊天图标
    initFace (){
      let that =this;
      Jsonp('https://api.weibo.com/2/emotions.json?source=1362404091',function (err, res) {
          if(res.code ==1){
            that.chatFaces=res.data;
          }
        });
    },

    //初始化聊天室
    initChat (){
      if(window.localStorage.getItem("user")){
         this.ConnSvr();
         this.user= JSON.parse(window.localStorage.getItem("user"));
      }
    },

    //开启或关闭表情
    toggleFace (){
      this.showFace = !this.showFace;
    },

    //选择表情
    faceSelect (item){
      this.selectedFace= item;
      this.chatContent += item.phrase;
      this.showFace = !this.showFace;
    },

    //发送内容
    sendContent (){
       if(this.user){
           console.log(this.chatContent);
           this.chatContent = '';
       }else{
          alert("未登录,不可以发送消息的哦!");
       }
    },

    ConnSvr (){
        var that = this;
        this.ws = new WebSocket("ws://58.220.31.244:57081/sub");

        this.ws.onopen = function() {
            console.log("conn succeed.");

            that.confirmUser(); //用户认证消息
        };

        this.ws.onmessage = function(evt) {
            let receives = JSON.parse(evt.data); //从字符窜中解析出json对象
            let data = receives[0];
            switch (data.op) {
                case 3:
                    console.log("聊天室收到心跳回复");
                    break;
                case 8:
                    let rcvbody_8 = data.body;
                    console.log("用户认证成功!");
                    // 启动计时器发送心跳包
                    let timer = setInterval(function() {
                        that.heartbeat();
                    }, 20000);
                    that.enterRoom();
                    break;
                case 24:
                    let rcvbody_24 = data.body;
                    let data_24 = JSON.parse(JSON.stringify(rcvbody_24));
                    //that.personInformation(data_24);
                    break;
                case 26:
                    let rcvbody_26 = data.body;
                    let data_26 = JSON.parse(JSON.stringify(rcvbody_26));
                    //that.quliaoInformation(data_26);
                    break;
                case 28:
                    let rcvbody_28 = data.body;
                    let data_28 = JSON.parse(JSON.stringify(rcvbody_28));
                    console.log("进入房间后的反馈信息", data_28);
                    that.$store.dispatch('changeOnlinePeople',data_28.data.userlist.length);
                    if (data_28.code == 100) {
                        console.log(data_28.msg);
                        var roomId = data_28.data.roomid;
                        this.roomID = roomId;
                    } else {
                        console.log(data.msg);
                    };
                    break;
                case 30:
                    let rcvbody_30 = data.body;
                    let data_30 = JSON.parse(JSON.stringify(rcvbody_30));
                    console.log("用户退出房间的反馈信息", data_30);
                    break;
                case 43:
                    let rcvbody_43 = data.body;
                    let data_43 = JSON.parse(JSON.stringify(rcvbody_43));
                    console.log("发送送礼消息的反馈", data_43);
                    break;
            }
        };
        this.ws.onclose = this.close;
        this.ws.onerror = this.error;
    },
    //长链接断开
    close (){
        let that  = this;
        console.log("WebSocket Closed.");

        //2秒后启动重连
        setTimeout("that.ConnSvr()", 2000);
    },

    //长链接出错
    error (evt){
      console.log("WebSocket Error." + evt.data);
    },

    //验证用户信息
    confirmUser (){
        let sid = this.user.SessionId;
        let uid = this.user.UserId;

        // 发送认证消息
        let body = '{"uid":"' + uid + '","sessionid":"' + sid + '","platform":"4"}';
        let pklen = body.length + 16;
        this.ws.send(JSON.stringify({
            'pklen': pklen,
            'klen': 16,
            'ver': 1,
            'op': 7,
            'id': 4,
            'body': JSON.parse(body)
        }));
    },

    //心跳
    heartbeat (){
      this.ws.send(JSON.stringify({
            'pklen': 16,
            'klen': 16,
            'ver': 1,
            'op': 2,
            'id': 1,
            'body': ''
        }));
    },

    //进入房间
    enterRoom () {
        let body = 888888;
        let pklen = body.length + 16;
        this.ws.send(JSON.stringify({
            'pklen': pklen,
            'klen': 16,
            'ver': 1,
            'op': 27,
            'id': 4,
            'body': body
        }));
    },

  },
}
</script>

<style scoped>
    .chat .chat-face-content img{
        padding:10px;
        cursor: pointer;
    }
</style>
