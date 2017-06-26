<template>
  <div class="index">
    <div class="container">
      <input type="text" value="" v-model="username" class="form-control"/>
      <input type="password" value="" v-model="pwd" class="form-control"/>
      <button @click="login()" class="btn btn-danger">登陆</button>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

export default {
  name: 'index',
  data () {
    return {
      username: '18516074685',
      pwd: 'yu123456'
    }
  },
  methods: {
    login (){
      let params={
          account:this.username,
          pwd:this.pwd,
          platform:6,
        };

      let response = api.login(params);

      response.then(function(res){
          console.log(res);
      }).catch(function(err){
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>

</style>
