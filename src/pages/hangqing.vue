<template>
  <div class="main">
    <div class="zj-list">
      <div class="inner-container">
        <ul class="list-inline">
          <li><h4>行情数据</h4></li>
          <li class="pull-right">
            <router-link to="/" style="color:#fff; text-decoration:none;"><h4 style="opacity:0.5;" exact>全部行情</h4></router-link></li>
        </ul>

        <div class="zj-list-header">
            <ul class="list-inline">
                <li class="active"><h4 style="color:#fff;">股票</h4></li>
                <li><h4 style="color:#fff;">现货</h4></li>
                <li><h4 style="color:#fff;">外汇</h4></li>
                <li><h4 style="color:#fff;">国际期货</h4></li>
                <li><h4 style="color:#fff;">全球指数</h4></li>
            </ul>
            <div class="search">
                <input type="text" placeholder="名称/代码" />
                <img src="../../static/images/search.png" style="width:20px;"/>
            </div>
        </div>
        <div class="divider"></div>
        <div class="sub-menu">
            <ul class="list-inline sub-menu-inner">
               <li v-for="bourse in BoursesList" v-bind:class="{ active:bourse.isActive}" @click="toggleBourse(bourse)">
                    <h5>{{bourse.cn}}</h5>
                </li>
            </ul>
        </div>
        <ol class="list-inline hq-static">
            <li v-for="hqstatic in hqStatics" v-bind:class="hqstatic.flag">
                <h4>{{hqstatic.sNM}}</h4>
                <h5>{{hqstatic.quo.last_price}}</h5>
                <h6>
                    <span class="pull-left">{{hqstatic.signal}}</span>
                    <span class="pull-right">{{hqstatic.increase}} </span>
                </h6>
            </li>
        </ol>
        <ul class="list-inline hq-list">
            <li><h5>名称/代码</h5></li>
            <li><h5>最新</h5></li>
            <li><h5>涨幅%</h5></li>
            <li><h5>成交量</h5></li>
        </ul>
        <div class="divider"></div>
        <div class="hq-list-detail" id="hq_accordian"></div>
      </div>
    </div>
    <div class="zhibo">

    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

import axios from 'axios'

export default {
  name: 'HangQing',
  data () {
    return {
        BoursesList:[],

        hqStatics:[],
    }
  },

  mounted (){
    this.hqBoursesList();

    this.hqVirtualData();
  },

  methods:{
    hqBoursesList (){
        let that = this;
        axios.post('http://58.220.31.241:8006/quotes/exchanges','').then(function (res) {
                if(res.data.code == 100){
                    let TempObj= res.data.data;
                    for(let i =0 ; i<TempObj.length; i++){
                        TempObj[i].isActive = false;
                    }
                    that.BoursesList =TempObj;
                    that.BoursesList[0].isActive= true;
                }
            }).catch(function (error) {
                console.log(error);
            });
    },

    toggleBourse(item){
        for(let i =0 ; i<this.BoursesList.length; i++){
            this.BoursesList[i].isActive = false;
        }

        item.isActive = true;
    },

     hqVirtualData: function() {
        //上证指数、美原油连、伦敦金数据初始化
        var params = [{
            "excd": "XSHGZS",
            "smcd": "000001"
        }, {
            "excd": "NYEFUT",
            "smcd": "CONC"
        }, {
            "excd": "IPM",
            "smcd": "AU"
        }];

        let that =this;

        axios.post('http://58.220.31.241:8006/quotes/getSymbolesInit', JSON.stringify(params)).then(function(result) {
            if(result.data.code == 100){
                let templateObj = result.data.data;
                var len = templateObj.length;
                for (let i = 0; i < len; i++) {
                    let plus, increase;
                    let signal = (parseFloat(templateObj[i].quo.last_price) - parseFloat(templateObj[i].quo.prev_close_price)).toFixed(3);
                        increase = (signal / parseFloat(templateObj[i].quo.prev_close_price)).toFixed(3);
                    if (parseFloat(templateObj[i].quo.last_price) !== 0 && parseFloat(templateObj[i].quo.prev_close_price) !== 0) {
                        if (signal >= 0) {
                            signal = '+' + signal;
                            plus = '';
                            increase = '+' + increase;
                        } else {
                            plus = "active";
                        }
                    } else if (parseFloat(templateObj[i].quo.last_price) == 0) { //最新价
                        signal = '+' + 0;
                        increase = '+' + 0;
                    } else if (parseFloat(templateObj[i].quo.prev_close_price) == 0) { //昨日开盘价
                        signal = '--';
                        increase = '--';
                        templateObj[i].quo.last_price = '--';
                    }

                    templateObj[i].signal= signal;

                    templateObj[i].increase= increase;

                    templateObj[i].flag= plus;
                }
                that.hqStatics = templateObj;
             }
        }).catch(function (error) {
                console.log(error);
            });
    },

  },
}
</script>

<style scoped>

</style>
