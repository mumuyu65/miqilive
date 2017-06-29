<template>
  <div class="main news">
    <div class="zj-list">
        <div class="inner-container">
          <ul class="list-inline">
            <li><h4>新闻</h4></li>
            <li class="pull-right">
              <router-link to="/" style="color:#fff; text-decoration:none;"><h4 style=" opacity:0.5;">全部文章</h4></router-link></li>
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
        <div class="report-text">
            <img v-bind:src="selectedNews.imgurl" class="pull-left" style="margin: 0 10px 10px 10px; width:506px; height:370px;"/>
            <h5 v-html="selectedNews.content" style=" opacity:0.9;" ></h5>
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
    }
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
        height:655px;
        overflow-y:auto;
    }

</style>
