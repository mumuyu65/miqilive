<template>
  <div class="Media">
    <div class="title">
      <i></i>
      <a href="javascript:;">快讯直播</a>
    </div>
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
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'economicsZhibo',
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
          'sid':'594baafbe138236e874fccec',
        };

      let response = api.economicsZhibo(params);

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
  .title {
    width: 100%;
    margin-top: 26px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom:50px;
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
    color: #333;
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
    color: #666;
    margin-left: 10px;
}

li.one-k .right {
    float: left;
    width: 800px;
    border-left: 1px solid #ccc;
    padding-left: 26px;
    padding-bottom: 10px;
    margin-left: 10px;
}

li.one-k .right p {
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #ccc;
    padding-top: 26px;
    padding-bottom: 20px;
}


</style>
