<template>
  <div class="main">
    <div class="title">
      <i></i>
      <a href="javascript:;">快讯直播</a>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12">
          <ul class="list-inline">
            <li v-for="economic in economicsList" class="one-k">
                <div class="left">
                   <a href="#">{{economic.CreateTime | timer}}</a>
                   <span></span>
                   <p class="shi">{{economic.CreateTime| dater}}</p>
                </div>
                <div class="right">
                  <p>{{economic.Context}}</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'economics',
  data () {
    return {
      economicsList:[]
    }
  },
  mounted  () {
     this.initData();
  },
  methods: {
    initData (){
      let that = this;
      let params={
          'uid':50017,
          'unix':'0',
          'sid':'595dd603e138236e8750d0ee',
        };

      let response = api.economics(params);

      response.then(function(res){
        if(res.data.Code ==3){
            that.economicsList=res.data.Data;
        }
      }).catch(function(err){
          console.log(err);
        });
    }
  },
   filters: {
      timer: function(value) {
         return value.substring(11,16);
        },
      dater: function(value) {
         return value.substring(5,10);
        },
    },
  computed:{

  }
}
</script>

<style scoped>
    .main{
         width:1200px;
         padding:10px 20px;
    }

  .title {
    border-bottom: 1px solid #ccc;
    margin-bottom:50px;
    color:#fff;
    width:100%;
  }

  .title i {
    width: 4px;
    height: 26px;
    background-color: #e61f1c;
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    vertical-align: middle;
    margin-top: -11px;
  }

  .title a {
    font-size: 28px;
    color: #fff;
  }

  li.one-k{
    width:100%;
  }
  li.one-k .left {
    float: left;
    width: 70px;
    position: relative;
  }

  li.one-k .left a {
    display: block;
    width: 60px;
    height: 30px;
    font-size: 16px;
    color: #fff;
    background-color: #e51e1a;
    border-radius: 6px;
    line-height: 30px;
    text-align: center;
    margin-top: 36px;
}

li.one-k .left span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e51e1a;
    display: block;
    position: absolute;
    left: 74px;
    top: 46px;
}
li.one-k .left p.shi {
    margin-top: 10px;
}

li.one-k .left p {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
}

li.one-k .right {
    float: left;
    width:93%;
    border-left: 1px solid #ccc;
    padding-left: 26px;
    padding-bottom: 10px;
    margin-left: 10px;
}

li.one-k .right p {
    font-size: 16px;
    color: #fff;
    border-bottom: 1px solid #ccc;
    padding-top: 26px;
    padding-bottom: 20px;
}


</style>
