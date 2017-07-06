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
               <li v-for="bourse in BoursesList" v-bind:class="{ active:bourse.isActive}" @click="hqBoursesDetails(bourse)">
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
        <div class="hq-list-detail">
            <div class="hq-item" v-for="(bourseDetail,index) in BoursesDetails" @click="hqhistoryData(bourseDetail,index)"
                 v-bind:class="{active:bourseDetail.isActive}">
                <ul class="list-inline hq-list">
                    <li><h4>{{bourseDetail.sNM}}</h4><h5>{{bourseDetail.sCD}}</h5></li>
                    <li><h4>{{bourseDetail.quo.last_price }}</h4></li>
                    <li><h4 v-bind:class="{active:bourseDetail.flag}">{{bourseDetail.increase}}</h4></li>
                    <li><h4>{{bourseDetail.quo.deal }}</h4>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <div class="zhibo">
        <div style="padding:0 10px;">
            <h6>行情/k线图</h6>
            <h3 class="text-center">{{selectedHq.sNM}}</h3>
        </div>
        <div class="report-divider"></div>
        <!--新浪微博等-->
        <ol class="list-inline" style="padding:0 10px;">
            <li class="pull-right" style="margin-top:10px;">
                <a href="#"><img src="../../static/images/qq.png" style="width:20px;"/></a>
                <a href="#"><img src="../../static/images/sina.png" style="width:20px;"/></a>
                <a href="#"><img src="../../static/images/qqzone.png" style="width:20px;"/></a>
                <a href="#"><img src="../../static/images/wechat.png" style="width:20px;"/></a>
            </li>
        </ol>
        <div id="main" style="width:858px; height:650px; margin:50px 0; padding:30px;"></div>
        <ul class="list-inline hq-select-time text-center">
            <li><button class="btn btn-danger">1分钟</button></li>
            <li><button class="btn btn-default">5分钟</button></li>
            <li><button class="btn btn-default">15分钟</button></li>
            <li><button class="btn btn-default">30分钟</button></li>
            <li><button class="btn btn-default">1小时</button></li>
            <li><button class="btn btn-default">4小时</button></li>
            <li><button class="btn btn-default">1天</button></li>
            <li><button class="btn btn-default">1周</button></li>
            <li><button class="btn btn-default">1个月</button></li>
            <li><button class="btn btn-default">3个月</button></li>
        </ul>
    </div>
  </div>
</template>

<script>
import API from '@/api/API'
//实例化api
const api = new API();

import axios from 'axios'

const hq_endpoint='http://58.220.31.241:8006'

import echarts from 'echarts'

export default {
  name: 'HangQing',
  data () {
    return {
        BoursesList:[],

        hqStatics:[],

        BoursesDetails:[],

        myEchart:{},

        echartLastTime:'',

        selectedHq:{},

        hqws:'',

        ClickedArr: [],

        hqSid: '',

        echartLastTime: '',

        echartHistoryData: [],

        echartHistoryKey: '',
    }
  },

  mounted (){
    this.hqBoursesList();

    this.hqVirtualData();

    this.myEchart = echarts.init(document.getElementById('main'));

    this.hqConn(); //长连接实时数据变化
  },

  methods:{
    hqBoursesList (){
        let that = this;
        axios.post(hq_endpoint+'/quotes/exchanges','').then(function (res) {
                if(res.data.code == 100){
                    let TempObj= res.data.data;
                    for(let i =0 ; i<TempObj.length; i++){
                        TempObj[i].isActive = false;
                    }
                    that.BoursesList =TempObj;
                    that.BoursesList[0].isActive= true;
                    that.hqBoursesDetails(that.BoursesList[0]);
                }
            }).catch(function (error) {
                console.log(error);
            });
    },

    hqVirtualData() {
        //上证指数、美原油连、伦敦金数据初始化
        let params = [{
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

        axios.post(hq_endpoint+'/quotes/getSymbolesInit', JSON.stringify(params)).then(function(result) {
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

    hqConn(){
         var  that = this;

         let params = [{
                "excd": "XSHGZS",
                "smcd": "000001"
            }, {
                "excd": "NYEFUT",
                "smcd": "CONC"
            }, {
                "excd": "IPM",
                "smcd": "AU"
        }];

        //    实时推送数据
         this.hqws = new WebSocket("ws://58.220.31.241:57081/sub");

         this.hqws.onopen = function() {
            console.log("conn succeed.");
            //定时发送心跳请求，保持连接状态
            setInterval(function() {
                that.hqws.send(JSON.stringify({
                    'pklen': 32,
                    'klen': 16,
                    'ver': 2,
                    'op': 2,
                    'id': 4,
                    'body': ''
                }))
            }, 8000);
        };



        this.hqws.onmessage = function(evt) {
            var receives = JSON.parse(evt.data); //从字符窜中解析出json对象
            var data = receives[0];
            switch (data.op) {
                case 3:
                    console.log("收到心跳回复");
                    break;
                case 1:
                    var rcvbody = data.body;
                    that.hqSid = rcvbody.data;
                    that.hqVirtualDataSubscribe(); //订阅固定数据行情
                    break;
                case 6:
                    var hqUpdate = data.body;
                    that.updateVirtualData(hqUpdate); //更新固定数据
                    that.updateEchartsData(hqUpdate); //更新echarts里面的数据
                    for (var i = 0; i < params.length; i++) {
                        if (hqUpdate.excd !== params[i].excd) {
                            that.updateWholeData(hqUpdate); //更新不固定数据
                        }
                    }
                    break;
            }
        };
        that.hqws.onclose = that.hqClose;
        that.hqws.onerror = that.hqError;
    },

    //订阅固有数据的行情

    hqVirtualDataSubscribe() {
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
        var body = {
            "sid": this.hqSid,
            "q_list": params
        };

        $.post('http://58.220.31.241:8006/quotes/quotesSubscription', JSON.stringify(body), function(result) {
            if (result.code == 100) {
                console.log("订阅成功！");
            }
        })
    },

    //更新固有数据
     updateVirtualData(hqUpdate) {
        //上证指数、美原油连、伦敦金数据实时更新
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
        for (var i = 0; i < 3; i++) {
            if (hqUpdate.excd == params[i].excd) {
                switch (hqUpdate.type) {
                    case '0':
                        var newValue = hqUpdate.value;
                        var signal, increase;
                        var prev_close_price =this.hqStatics[i].quo.prev_close_price;
                        if (prev_close_price !== 0 && newValue !== 0)  {
                            signal = (parseFloat(newValue) - parseFloat(prev_close_price)).toFixed(3);
                            increase = (signal / parseFloat(prev_close_price)).toFixed(3);
                            if (signal >= 0) {
                                this.hqStatics[i].signal = '+' + signal;
                                this.hqStatics[i].increase = '+' + increase;
                                this.hqStatics[i].flag ='';
                            } else {
                                this.hqStatics[i].signal = signal;
                                this.hqStatics[i].increase = increase;
                                this.hqStatics[i].flag ='active';
                            }
                        } else {
                            this.hqStatics[i].signal = 0;
                            this.hqStatics[i].increase = 0;
                            this.hqStatics[i].flag ='';
                        }
                        break;
                }
            }
        }
    },

    //订阅echarts数据的行情
    echartSubscribe(arr) {
        var body = {
            "sid": this.hqSid,
            "q_list": arr
        };

        $.post(hq_endpoint+'/quotes/quotesSubscription', JSON.stringify(body), function(result) {
            if (result.code == 100) {
                console.log("echarts订阅成功！");
            }
        })
    },

    updateEchartsData(eData) {
        if (this.ClickedArr[0].exCD == eData.excd && this.ClickedArr[0].sCD == eData.smcd &&
            parseInt(this.echartLastTime) < parseInt(eData.time)) {
            console.log('eData', eData);
            this.echarts(this.echartHistoryData, this.echartHistoryKey, eData);
        }
    },

    updateWholeData: function(data) {
        var len = this.ClickedArr.length;
        for (var i = 0; i < len; i++) {
            if (data.smcd == this.ClickedArr[i].sCD) {
                switch (data.type) {
                    case '0':
                        var newValue = data.value;

                        var prev_close_price = this.ClickedArr[i].quo.prev_close_price;

                        this.BoursesDetails[i].quo.last_price =newValue;

                        var signal = (parseFloat(newValue) - parseFloat(prev_close_price)).toFixed(3),
                            increase = (signal / parseFloat(prev_close_price)).toFixed(3);
                        if (signal >= 0) {
                            increase = '+' + increase;
                            this.BoursesDetails[i].flag='';
                        } else {
                            //$("#hq_accordian .hq-item").eq(i).find(".hq-list>li").eq(2).find("h4").text(increase).addClass('active');
                        }
                        break;
                    case '2':
                        //$("#hq_accordian .hq-item").eq(i).find(".hq-list>li").eq(3).find("h4").text(data.value);
                        break;
                }
            }
        }
    },

    hqBoursesDetails(item) {
        //各股市的股票详情
        let params = {
            "excd": item.code,
        };

        for(let i =0 ; i<this.BoursesList.length; i++){
            this.BoursesList[i].isActive = false;
        }

        item.isActive = true;

        let that = this;

        axios.post(hq_endpoint+'/quotes/getInitSymboles',JSON.stringify(params)).then(function(res){
            if(res.data.code == 100){
                let obj = res.data.data;
                let len = obj.length;
                for (let i = 0; i < len; i++) {
                    let plus, increasement;
                    if (parseFloat(obj[i].quo.last_price) !== 0 && parseFloat(obj[i].quo.prev_close_price) !== 0) {
                        increasement = ((parseFloat(obj[i].quo.last_price) - parseFloat(obj[i].quo.prev_close_price)) / parseFloat(obj[i].quo.prev_close_price)).toFixed(4);
                    } else if (parseFloat(obj[i].quo.last_price) == 0) {
                        increasement = 0;
                    } else if (parseFloat(obj[i].quo.prev_close_price) == 0) {
                        increasement = '--';
                    }

                    if (increasement >= 0) {
                        plus = '';
                    } else {
                        plus = 'active';
                    }
                    obj[i].increase= increasement;

                    obj[i].flag= plus;

                    obj[i].isActive = false;

                }
                    that.hqSubscribe(obj); //订阅非固定数据行情

                    that.BoursesDetails = obj;

                    that.BoursesDetails[0].isActive = true;

                    that.hqhistoryData(that.BoursesDetails[0],0);

            }
        }).catch(function (error) {
                console.log(error);
            });
    },

    hqSubscribe(arr) {
        this.ClickedArr = arr; //暂时存储当前被点击的数组
        var tempArr = [];
        var arr_len = arr.length;
        for (var i = 0; i < arr_len; i++) {
            tempArr.push({
                "excd": arr[i].exCD,
                "smcd": arr[i].sCD
            });
        }
        //根据点击的交易所不同，来进行订阅
        var body = {
            "sid": this.hqSid,
            "q_list": tempArr
        };

        $.post(hq_endpoint+'/quotes/quotesSubscription', JSON.stringify(body), function(result) {
            if (result.code == 100) {
                console.log("订阅成功！");
            }
        })
    },

    showEcharts(Arr,key,newData){
       let arr = Arr.sort(this.compare('stime'));

       if (!newData) {
            this.echartLastTime = arr[0].stime;
        } else {
            this.echartLastTime = newData.time;
            let arr_len = arr.length - 1;
            switch (newData.type) {
                case '26':
                    arr.push({
                        stime: newData.time,
                        oprice: arr[arr_len].oprice,
                        cprice: arr[arr_len].cprice,
                        lprice: arr[arr_len].lprice,
                        hprice: newData.value
                    });
                    break;
                case '27':
                    arr.push({
                        stime: newData.time,
                        oprice: arr[arr_len].oprice,
                        cprice: arr[arr_len].cprice,
                        lprice: newData.value,
                        hprice: arr[arr_len].hprice
                    });
                    break;
            }
        }

        let rawData = [],
            dates, data;
        rawData = arr.reverse();

        let that = this;

        dates = rawData.map(function(item) {
            return that.hqDateStamp(item.stime);
        });
        data = rawData.map(function(item) {
            return [+item.oprice, +item.cprice, +item.lprice, +item.hprice];
        });


         var option = {
            backgroundColor: '#000',
            legend: {
                data: [],
                inactiveColor: '#777',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    animation: false,
                    type: 'cross',
                    lineStyle: {
                        color: '#376df4',
                        width: 2,
                        opacity: 1
                    }
                }
            },
            xAxis: {
                type: 'category',
                data: dates, //时间
                axisLine: {
                    lineStyle: {
                        color: '#8392A5'
                    }
                }
            },
            yAxis: {
                scale: true,
                axisLine: {
                    lineStyle: {
                        color: '#8392A5'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#8392A5'
                    }
                },
                position: 'right',
                axisTick: {
                    show: false
                },
            },
            grid: {
                bottom: 50,
                right: 50,
                left:50,
                top: 50
            },
            dataZoom: [{
                type: 'inside',
                show: 'true',
            }],
            animation: false,
            series: [{
                type: 'candlestick',
                name: '日K',
                data: data,
                dimensions: ['date', '开盘价', '收盘价', '最低价', '最高价'],
                itemStyle: {
                    normal: {
                        color: '#FD1050',
                        color0: '#23d7e3',
                        borderColor: '#FD1050',
                        borderColor0: '#23d7e3'
                    }
                }
            }]
        };

        this.myEchart.setOption(option);
    },

    hqhistoryData(obj, key) {
         for(let i =0 ; i<this.BoursesDetails.length; i++){
            this.BoursesDetails[i].isActive = false;
         }
        obj.isActive = true;

        this.selectedHq = obj;

        let params = {
                "excd": obj.exCD,
                "smcd": obj.sCD,
                "unixtm": 0,
                "unit": 0,
                "count": 100
            };

        let that = this;
        axios.post(hq_endpoint+'/quotes/queryKLine', JSON.stringify(params)).then(function(res) {
            if (res.data.code == 100) {
                that.showEcharts(res.data.data, key,'');
            }
        }).catch(function (error) {
                console.log(error);
            });
    },
    //数组排序
     compare (property) {
        return function(a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
        }
    },

    hqDateStamp (tm) {
        var timestamp = tm;
        if (/^\d{10}$/.test(timestamp)) {
            timestamp *= 1000;
        } else if (/^\d{13}$/.test(timestamp)) {
            timestamp = parseInt(timestamp);
        } else {
            return;
        }
        var time = new Date(timestamp);
        var year = time.getFullYear();
        var month = (time.getMonth() + 1) > 9 && (time.getMonth() + 1) || ('0' + (time.getMonth() + 1))
        var date = time.getDate() > 9 && time.getDate() || ('0' + time.getDate())
        var hour = time.getHours() > 9 && time.getHours() || ('0' + time.getHours())
        var minute = time.getMinutes() > 9 && time.getMinutes() || ('0' + time.getMinutes())
        var second = time.getSeconds() > 9 && time.getSeconds() || ('0' + time.getSeconds())
        var YmdHis = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
        return YmdHis;
    },

    hqClose() {
        console.log("WebSocket Closed.");
        //2秒后启动重连
        setTimeout("Zhibo.hqVirtualConn()", 2000);
    },
    hqError(evt) {
        console.log("WebSocket Error." + evt);
    },

  },
}
</script>

<style scoped>
    .hq-item{
        cursor:pointer;
        padding:0 5px;
    }
    .hq-item.active{
        background-color:#4b4b4b;
    }

    .report-divider{
        width:100%;
        height:2px;
        background-color:#4B4B4B;
        margin-top:40px;
    }

    .hq-select-time>li{
        margin-right:12px;
    }
</style>
