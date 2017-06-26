<template>
  <div class="news">
    <div class="row t-nav">
        <ul class="list-unstyled">
           <li class="t-1" v-for="menu in subMenu">
              <a @click="mainContent(menu.uid)">{{menu.title}}</a>
           </li>
        </ul>
    </div>
    <div class="row box xw">
        <div class="col-lg-3 h-img" v-for="content in newsContent">
            <div class="img-T">
                <a href=""><img v-bind:src="content.Url"/></a>
            </div>
            <h2>{{content.Title}}</h2>
            <div class="thime">
                <span class="time">{{content.CreateTime}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'economicsNews',
  data () {
    return {
      newsList:[],
      subMenu:[{id:1,uid:50000,title:'头条'},{id:2,uid:50001,title:'原油'},{id:3,uid:50002,title:'贵金属'},
      {id:4,uid:50003,title:'股票'},{id:5,uid:50004,title:'期货'},{id:6,uid:50005,title:'外汇'}],
      newsContent: []
    }
  },
  mounted  () {
     this.initData();
  },
  methods: {
    initData (){
      let that = this;
      let params={
          'uid':50000,
          'unix':'0',
          'sid':'594c967de138236e874fcf9b',
        };

      let response = api.economicsNews(params);

      response.then(function(res){
        if(res.data.Code==3){
            that.newsContent = res.data.Data;
        }
      }).catch(function(err){
          console.log(err);
        });
    },
    mainContent (Uid){
        let that = this;
        let params={
              'uid':Uid,
              'unix':'0',
              'sid':'594c967de138236e874fcf9b',
            };

          let response = api.economicsNews(params);

          response.then(function(res){
             if(res.data.Code==3){
                that.newsContent = res.data.Data;
                }
          }).catch(function(err){
              console.log(err);
            });
      }
  }
}
</script>

<style scoped>
.news .t-nav {
    border-bottom: 1px solid #eeeeee;
    margin-top: 8px;
    margin-bottom: 15px;
}

.news .t-nav ul li {
    float: left;
    height: 50px;
    line-height: 50px;
}

.news .t-nav .t-1 {
    margin-right: 74px;
}

.news .t-nav ul li a {
    color: #000;
    font-size: 26px;
    cursor:pointer;
}

.news .box {
    margin-bottom: 15px;
}

.news .box .h-img {
    margin-left: 30px;
    width: 256px;
    height: 240px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
}

.news .box .h-img .img-T {
    width: 230px;
    height: 155px;
    overflow: hidden;
    margin: 14px;
}

.news .box h2 {
    margin-top: 20px;
    font-size: 14px;
    margin: 0 14px;
    height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.news .box .thime {
    overflow: hidden;
}

.news .box .thime span.time {
    float: left;
    margin-left: 14px;
}

</style>
