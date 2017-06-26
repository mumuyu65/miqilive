<template>
  <div class="caijing">
    <div class="title">
        <div class="title-1"></div>
        按时间查询
    </div>
    <div class="t-select clearfix">
       <div class="week f-l clearfix">
          <dl class="cur">
            <dt class="t-day">20</dt>
            <dd class="t-week">周二</dd>
          </dl>
          <dl class="">
            <dt class="t-day">21</dt>
            <dd class="t-week">周三</dd>
          </dl>
          <dl class="">
            <dt class="t-day">22</dt>
            <dd class="t-week">周四</dd>
          </dl>
          <dl>
             <dt class="t-day">23</dt>
             <dd class="t-week">周五</dd>
         </dl>
         <dl class="">
             <dt class="t-day">24</dt>
             <dd class="t-week">周六</dd>
         </dl>
         <dl>
             <dt class="t-day">25</dt>
             <dd class="t-week">周日</dd>
         </dl>
         <dl>
             <dt class="t-day">26</dt>
             <dd class="t-week">周一</dd>
         </dl>
         </div>
     </div>
     <div class="title">
        <div class="title-2"></div>
            财经数据
        </div>
  </div>
</template>

<script>
export default {
  name: 'economicsCalendar',
  data () {
    return {
      msg: 'Welcome to ydd economicsCalendar页面'
    }
  }
}
</script>

<style scoped>
.caijing .title {
    font-size: 20px;
    color: #e61f1c;
    height: 22px;
    margin: 20px 0;
    line-height: 22px;
}

.caijing .title-1{
    width: 22px;
    display:inline-block;
    height: 22px;
    margin-right: 15px;
    background: url(../../static/images/caijing/date.png) center center no-repeat;
    background-size: 22px;
    vertical-align:top;
}

.caijing .week dl {
    font-size: 16px;
    float: left;
    width: 50px;
    text-align: center;
    margin-right: 35px;
    cursor: pointer;
}

.caijing .cur {
    border-bottom: 3px solid #e61f1c;
    padding-bottom: 5px;
}

.caijing .week dl dd {
    margin: 5px 0;
}

.caijing .title-2 {
    width: 22px;
    display:inline-block;
    height: 22px;
    margin-right: 15px;
    background: url(../../static/images/caijing/time.png) center center no-repeat;
    background-size: 22px;
    vertical-align:top;
    }

</style>
