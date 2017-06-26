<template>
  <div class="teacher">
    <div class="row box xw">
         <div class="col-lg-3 h-img" v-for="teacher in economicsTeacher">
            <div class="img-T">
                <a href=""><img v-bind:src="teacher.Url"/></a>
            </div>
            <h2>{{teacher.Title}}</h2>
            <div class="thime">
                <span class="time">{{teacher.CreateTime}}</span>
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
  name: 'economicsTeachers',
  data () {
    return {
      economicsTeacher: []
    }
  },
  mounted () {
    this.initData();
  },
  methods: {
    initData () {
        let that = this;
          let params={
              'uid':50015,
              'unix':'0',
              'sid':'594cf290e138236e874fd1e7',
            };

          let response = api.economicsTeacher(params);

          response.then(function(res){
            if(res.data.Code==3){
                that.economicsTeacher = res.data.Data;
            }
          }).catch(function(err){
              console.log(err);
        });
    }
  }
}
</script>

<style scoped>
.teacher .box {
    margin-bottom: 15px;
}

.teacher .box .h-img {
    margin-left: 30px;
    width: 256px;
    height: 240px;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 20px;
}

.teacher .box .h-img .img-T {
    width: 230px;
    height: 155px;
    overflow: hidden;
    margin: 14px;
}

.teacher .box h2 {
    margin-top: 20px;
    font-size: 14px;
    margin: 0 14px;
    height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.teacher .box .thime {
    overflow: hidden;
}

.teacher .box .thime span.time {
    float: left;
    margin-left: 14px;
}

</style>
