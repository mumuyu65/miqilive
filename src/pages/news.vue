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
            <li v-for="report in economicNews " class="report-item">
                <div class="media">
                    <a class="media-left">
                        <img src="../../static/images/flag.png" alt="旗帜" class="flag"/>
                    </a>
                    <div class="media-body">
                    <h4 class="media-heading">
                        <a href="#">{{report.title}}</a></h4>
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
        <div style="margin-top:30px; padding:0 10px;">
            <img v-bind:src="selectedNews.imgurl" class="pull-left" style="margin: 0 10px 10px 10px;"/>
            <h5 v-html="selectedNews.content" ></h5>
        </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

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

  methods:{
    initData (){
        let that = this;

        let params={
            begidx: 0,
            counts: 10,
            type: 2
        };

        api.getNews(params).then(function(res){
            console.log(res);
            if(res.data.Code ==3){
                that.economicNews = res.data.Data.Detail;

                that.selectedNews=that.economicNews[0];
            }
        }).catch(function(err){
          console.log(err);
        });
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
    }

    .news .report-item{
        height:147px;
        overflow:hidden;
        padding:20px 10px;
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

</style>
