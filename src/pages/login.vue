<template>
 <div class="modal fade" id="loginModal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                      &times;
                  </button>
              </div>
              <div class="modal-body">
                  <div :class="{active: loginway == 'register'}" class="loginContent">
                      <div class="login_border">
                          <div class="text_1">
                              <p>登 录</p>
                          </div>
                          <div class="text_2">
                              <input type="text" name="account" placeholder="输入用户名" v-model="login.username" required/>
                          </div>
                          <div class="text_3">
                              <input type="password" name="pwd" placeholder="输入密码" v-model="login.pwd" required/>
                          </div>
                          <div class="text_5">
                              <input type="submit" value="登   录" @click="doLogin()"/>
                          </div>
                          <div class="text_6 pull-right">
                              <a @click="changeLogin('register')">还没有账户？</a>
                          </div>
                      </div>
                  </div>
                  <div :class="{active: loginway == 'login'}" class="loginContent">
                      <div class="login_border">
                          <div class="text_1">
                                  <p>注 册</p>
                              </div>
                          <div class="text_2">
                              <input name="account" type="text" placeholder="输入手机号" v-model="register.phone"/>
                              <input type="button" value="获取验证码" class="num" @click="getVcode()"/>
                          </div>
                          <div class="text_2">
                              <input name="vcode" type="text" placeholder="输入验证码" v-model="register.vcode"  required/>
                          </div>
                          <div class="text_2">
                              <input name="pwd" type="password" placeholder="输入密码" v-model="register.pwd" required/>
                          </div>
                          <div class="text_2">
                              <input name="nickname" type="text" placeholder="输入昵称" v-model="register.nickname" required/>
                          </div>
                          <div class="text_5">
                              <input type="submit" value="提 交" @click="doRegist()"/>
                          </div>
                          <div class="text_6">
                              <div class="pull-right"><a @click="changeLogin('login')">已有账号，去登录</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                  </button>
              </div>
          </div>
        </div>
    </div>
   </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

import { mapGetters } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      login:{},
      register:{}
    }
  },
  computed: mapGetters({
      loginway: 'getLoginway'
  }),
  methods: {
    // 登陆
    doLogin (){
      let that = this;
      var data={
            account:this.login.username,
            pwd:this.login.pwd
        };

      api.login(data).then(function(res){
          if(res.data.Code ==3){
            $("#loginModal").modal("hide");
            that.$store.dispatch('changeUser', res.data.Data);
            that.$store.dispatch('changeLogin', true);
            window.localStorage.setItem("user",JSON.stringify(res.data.Data));
            alert(res.data.Msg);
          }
      }).catch(function(err){
          console.log(err);
        });
    },
     // 切换注册或者登陆状态
    changeLogin (loginway) {
        this.$store.dispatch('changeLoginway', loginway)
    },
    // 获取验证码
    getVcode (){
      let data={
            phone: this.register.phone
        };
      api.getVcode(data).then(function(res){
          if(res.data.Code ==3){
            alert(res.data.Msg);
          }
      }).catch(function(err){
          console.log(err);
        });
    },
     // 注册
    doRegist () {
        let that = this;
        let data={
            account:that.register.phone,
            pwd:that.register.pwd,
            vcode:that.register.vcode,
            nick:that.register.nickname,
            phone:that.register.phone
          };
        if(that.register.phone && that.register.pwd && that.register.nickname && that.register.vcode){
            api.register(data).then(function(res){
                if(res.data.Code ==3){
                  $("#loginModal").modal("hide");
                  that.$store.dispatch('changeUser', res.data.Data);
                  window.localStorage.setItem("user",JSON.stringify(res.data.Data));
                  alert(res.data.Msg);
                }
            }).catch(function(err){
                console.log(err);
              });
        }else{
          alert("存在空值，请重新输入！");
        }
    },
  }
}
</script>

<style scoped>

.loginContent.active{
  display:none;
}

</style>
