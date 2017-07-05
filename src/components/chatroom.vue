<template>
    <div class="chat">
        <ul class="list-inline">
            <li><h4 style="color:#f00;">实时聊天</h4></li>
            <li class="pull-right">
                <h4>在线人数：<span>{{userOnline}}</span></h4>
            </li>
        </ul>
        <div class="chat-inner">
            <div class="inner-container" id="chat_inner">
                <div class="chat-item" v-for="item in chatInner">
                  <ol class="list-inline">
                    <li style="vertical-align: bottom">
                      <img v-bind:src="item.userlog" alt="">
                    </li>
                    <li style="vertical-align: bottom"><h5>{{item.date}}</h5></li>
                    <li><h5>{{item.name}}</h5></li>
                  </ol>
                  <h4 v-html="item.text"></h4>
                </div>
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
                <button class="btn btn-send" @click="sendContent()">
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
      userLevel:[],
      chatInner:[],
      roomID:0,
    }
  },
  mounted (){
    this.initFace();

    this.initChat();

    this.UserLevel();  //用户等级
  },
   computed: mapGetters({
      userOnline: 'getOnline',
      giftNum: 'getLastGiftNum',
      giftSelected:'getGiftSelected',
      sendGift:'isSendGift',
      giftArr:'getGifts',
      isLogin:'getLogin'
  }),
  watch:{
    sendGift:'chatGift',
    isLogin:'initChat'
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
    },

    //初始化聊天室
    initChat (){
        if(this.isLogin || window.localStorage.getItem("user") ){
            this.user=JSON.parse(window.localStorage.getItem("user"));
            this.ConnSvr();
        }
    },

    //清屏
    clear(){
        this.chatInner = [];
    },

    //用户等级
    UserLevel (){
      let that =this;
      api.userLevel().then(function(res){
           if (res.data.Code == 3) {
                that.userLevel = res.data.Data;
            }
      }).catch(function(err){
          console.log(err);
        });
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
       if(window.localStorage.getItem("user")){
            if(this.chatContent){
                 this.sendText(this.chatContent);
                 this.chatContent = '';
            }else{
                alert("输入的内容不能为空！");
            }

       }else{
          alert("未登录,不可以发送消息的哦!");
       }
    },

    //发送礼物
    chatGift (){
       if(window.localStorage.getItem("user")){
        var body = '{"roomid":"' + this.roomID + '",' + '"type":"1",' +
            '"message":{' +
            '"giftid":"' + this.giftSelected + '",' +
            '"giftcount":"' + this.giftNum + '"' +
            '}' +
            '}';
        var pklen = body + 16;
        if(this.sendGift){
            this.ws.send(JSON.stringify({
            'pklen': pklen,
            'klen': 16,
            'ver': 1,
            'op': 42,
            'id': 4,
            'body': JSON.parse(body)
        }));
         this.$store.dispatch("sendGift",false);
        }
      }else{
        alert("未登录,不可以发送礼物的哦!");
      }
    },

    ConnSvr (){
        var that = this;
        that.ws = new WebSocket("ws://58.220.31.244:57081/sub");

        that.ws.onopen = function() {
            console.log("conn succeed.");

            that.confirmUser(); //用户认证消息
        };

        that.ws.onmessage = function(evt) {
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
                    var timer = setInterval(function() {
                        that.heartbeat();
                     }, 20000);
                    that.enterRoom();
                    break;
                case 24:
                    let rcvbody_24 = data.body;
                    let data_24 = JSON.parse(JSON.stringify(rcvbody_24));
                    that.personInformation(data_24);
                    break;
                case 26:
                    let rcvbody_26 = data.body;
                    let data_26 = JSON.parse(JSON.stringify(rcvbody_26));
                    that.quliaoInformation(data_26);
                    break;
                case 28:
                    let rcvbody_28 = data.body;
                    let data_28 = JSON.parse(JSON.stringify(rcvbody_28));
                    console.log("进入房间后的反馈信息", data_28);
                    that.$store.dispatch('changeOnlinePeople',data_28.data.userlist.length);
                    if (data_28.code == 100) {
                        let roomId = data_28.data.roomid;
                        that.roomID = roomId;
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
        that.ws.onclose = that.close;
        that.ws.onerror = that.error;
    },
    //长链接断开
    close (){
        let that = this;
        console.log("WebSocket Closed.");

        //2秒后启动重连
        setTimeout(function(){
            that.ConnSvr();
        }, 2000);
    },

    //长链接出错
    error (evt){
      console.log("WebSocket Error." + evt.data);
    },

    //验证用户信息
    confirmUser (){
        let sid = this.user.SessionId;
        let uid = this.user.UserId;

        console.log(sid,uid);


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

    //发送消息
    sendText (Message) {
        if(this.ws){
            var body = '{"roomid":"' + this.roomID + '","message":"' + Message + '","type":"0"}';
            var pklen = body + 16;
            this.ws.send(JSON.stringify({
                'pklen': pklen,
                'klen': 16,
                'ver': 1,
                'op': 23,
                'id': 4,
                'body': JSON.parse(body)
            }));
        }else{
            this.ConnSvr();
        }

    },

    personInformation (Data) {
        console.log('自己在群聊中发送消息的反馈', Data);
    },

    //接收群聊消息
    quliaoInformation (Data) {
        let date = this.dateStamp(parseInt(Data.time * 1000)); //时间戳
        switch (Data.type) {
            case '0':
                this.showChat(date, Data.username, Data.message, Data);
                break;
            case '1':
                this.showGift(date, Data, Data.message.giftid, Data.message.giftcount, Data.message.giftusername);
                break;
            case '2':
                    this.showChat(date, Data.username, Data.message.inname + '进入房间', Data);
                    break;
            case '3':
                this.showChat(date, Data.username, Data.message.inname + '退出房间', Data);
                break;
            case '5':
                alert("直播结束....");
                break;
        }
    },

    //时间转换格式
    dateStamp (tm) {
        //获取一个事件戳
        var time = new Date(tm);
        //获取年份信息
        var y = time.getFullYear();
        //获取月份信息，月份是从0开始的
        var m = time.getMonth() + 1;
        //获取天数信息
        var d = time.getDate();

        var H = time.getHours();

        var M = time.getMinutes();

        var S = time.getSeconds();
        //返回拼接信息
        return this.add(H) + '：' + this.add(M);
    },
    add(m) {
        return m < 10 ? '0' + m : m
    },

    //文字始终置顶
    scrollTop (){
        let t = document.getElementById('chat_inner');
        t.scrollTop = t.scrollHeight;
    },

    //分析输入的聊天内容
     /*进行解析*/
    analysis (value) {
        let arr = value.match(/\[.{1,5}\]/g);
        console.log(arr);
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j in this.chatFaces) {
                    if (arr[i] == this.chatFaces[j].phrase) {
                        var ex = '<img src="' + this.chatFaces[j].url + '"/>';
                        value = value.replace(arr[i], ex);
                        break;
                    }

                }
            }
        }
        return value;
    },

    //显示聊天内容
    showChat (date, name, text, img) {
        //根据不同的级别，显示不同的图标
        var userLog;
        console.log('用户接受群聊消息', img);
        let len = this.userLevel.length;
        for (let i = 0; i < len; i++) {
            if (img.userflag == this.userLevel[i].fid && img.userlevel == this.userLevel[i].lid) {
                userLog = this.userLevel[i].role_css;
            }
        }

        var Text = this.analysis(text);

        let chat_content={
            userlog:userLog,
            name:name,
            text:Text,
            date:date
        };

        this.chatInner.push(chat_content);

        this.scrollTop();
    },

    //显示礼物
    showGift(date, Data, giftid, giftCount, giftusername) {
        var img;
        var giftImg, giftPrice;
        for (let i = 0; i < this.giftArr.length; i++) {
            if (giftid == this.giftArr[i].id) {
                giftImg = this.giftArr[i].imgurl;
                giftPrice = this.giftArr[i].price;
            }
        }

        let len = this.userLevel.length;
        for (let i = 0; i < len; i++) {
            if (Data.userflag == this.userLevel[i].fid && Data.userlevel == this.userLevel[i].lid) {
                img = this.userLevel[i].role_css;
            }
        }

        let obj=JSON.parse(window.localStorage.getItem("user"));

        obj.Beans -=parseInt(giftPrice) * parseInt(giftCount);

        this.$store.dispatch('changeUser',obj);

        window.localStorage.setItem('user',JSON.stringify(obj));

        let Text='<span style="color:#f00;">' + giftusername + '送了' + giftCount + '个</span><img style="width:56px;" src="' + giftImg + '" alt="">';

        let chat_content={
            userlog:img,
            name:Data.username,
            date:date,
            text:Text
        };
        this.chatInner.push(chat_content);
        this.scrollTop();
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
