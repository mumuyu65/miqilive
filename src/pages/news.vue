<template>
  <div class="main news">
    <div class="zj-list">
      <div class="inner-container">
        <ul class="list-inline">
          <li><h4>新闻</h4></li>
          <li class="pull-right">
            <router-link to="/" style="color:#fff; text-decoration:none;"><h4 style="opacity:0.5;" exact>全部文章</h4></router-link></li>
        </ul>
        <ol class="list-unstyled">
          <li v-for="report in economicNews " class="report-item" @click="showContent(report)" v-bind:class="{ active: report.isActive }">
              <div class="media">
                  <a class="media-left">
                      <img src="../../static/images/flag.png" alt="旗帜" class="flag"/>
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">
                        <a>{{report.title}}</a>
                    </h4>
                    <p v-html="report.content"></p>
                  </div>
              </div>
          </li>
        </ol>
      </div>
    </div>
    <div class="zhibo">
        <div class="report-content">
            <h6>宏观/正文</h6>
            <h3 class="text-center">{{selectedNews.title}}</h3>
        </div>
        <div class="report-divider"></div>
        <!--新浪微博等-->
        <ol class="list-inline" style="padding:0 10px;">
            <li><h6>发布日期：{{selectedNews.unix | dateStamp}}</h6></li>
            <li class="pull-right" style="margin-top:10px;">
                <a href="http://wpa.qq.com/msgrd?v=3&uin=571014594&site=qq&menu=yes"><img src="../../static/images/qq.png" style="width:20px;"/></a>
                <a href="http://weibo.com/yuyangyang0712/profile?rightmod=1&wvr=6&mod=personinfo"><img src="../../static/images/sina.png" style="width:20px;"/></a>
                <a href="https://user.qzone.qq.com/571014594"><img src="../../static/images/qqzone.png" style="width:20px;"/></a>
                <a style="cursor:pointer;" onclick="alert('欢迎加我微信，微信号yu18718525290!')"><img src="../../static/images/wechat.png" style="width:20px;"/></a>
            </li>
        </ol>
        <div class="report-text">
            <img v-bind:src="selectedNews.imgurl" class="pull-left"/>
            <h5 v-html="selectedNews.content" ></h5>
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

export default {
  name: 'News',
  data () {
    return {
        economicNews:[],
        selectedNews:{},
    }
  },
  filters: {
      dateStamp (value){
        //获取一个事件戳
         let time = new Date(parseInt(value)*1000);
         //获取年份信息
         let y = time.getFullYear();
         //获取月份信息，月份是从0开始的
         let m =(time.getMonth()+1)<10?'0'+(time.getMonth()+1):(time.getMonth()+1);
         let d = time.getDate();
            d=d<10?'0'+d:d;

         let H=time.getHours();
            H=H<10?'0'+H:H

         let M=time.getMinutes();
            M=M<10?'0'+M:M
            value=y+'-'+m + '-' + d+'  '+H+":"+M;
         //返回拼接信息
         return value;
      }
  },
  mounted (){
    this.initData();
  },
  components:{ Gift },
  methods:{
    initData (){
        let that = this;

        let params={
            begidx: 0,
            counts: 10,
            type: 2
        };

        api.getNews(params).then(function(res){
            if(res.data.Code ==3){
                let templateObj = res.data.Data.Detail;

                for(let i= 0; i<templateObj.length; i++){
                     templateObj[i].isActive = false ;
                }

                that.economicNews = templateObj;

                that.selectedNews = that.economicNews[0];

                that.selectedNews.isActive = true;
            }
        }).catch(function(err){
          console.log(err);
        });
    },

    showContent(item){
        for(let i= 0; i<this.economicNews.length; i++){
          this.economicNews[i].isActive = false ;
        }
        item.isActive = true ;
        this.selectedNews= item;
    },
  }
}
</script>

<style scoped>
    .news .flag{
        width:33px;
        height:33px;
    }

    .news .inner-container{
        background-color:#4B4B4B;
        padding-right:20px;
    }

    .news .inner-container .report-item{
        background-color:#000;
        margin-bottom:10px;
        cursor:pointer;
    }

    .news .report-item{
        height:147px;
        overflow:hidden;
        padding:20px 10px;
    }

    .news .report-item.active{
        background-color:#4B4B4B;
    }

    .news .report-item a{
       color:#fff;
       opacity:0.9;
    }

    .news .report-content{
        padding:0 10px;
    }

    .news .report-divider{
        width:100%;
        height:2px;
        background-color:#4B4B4B;
        margin-top:40px;
    }

    .news .zhibo .report-text{
        margin-top:30px;
        padding:0 10px;
        height:625px;
        overflow-y:auto;
    }

    .news .zhibo .report-text::-webkit-scrollbar{
        width:10px;
        height:5px;
        background-color: #000;
    }

    .news .zhibo .report-text::-webkit-scrollbar-thumb{
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #4b4b4b;
        width:5px;
    }

    .news .zhibo .report-text>img{
         margin: 0 10px 10px 10px;
         width:506px;
         height:370px;
    }

    .news .zhibo .report-text>h5{
        opacity:0.9;
    }
</style>
