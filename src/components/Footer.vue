<template>
  <div class="footer">
    <div class="container">
      <div class="fo">
        <img src="../../static/images/icon-logo.png"><span>赢德道</span>
      </div>
      <div class="f-nav">
        <dl>
          <dt>赢资讯</dt>
          <dd><a href="">快讯直播</a></dd>
          <dd><a href="">头条</a></dd>
          <dd><a href="">原油</a></dd>
          <dd><a href="">贵金属</a></dd>
          <dd><a href="">股票</a></dd>
          <dd><a href="">期货</a></dd>
          <dd><a href="">外汇</a></dd>
          <dd><a href="">财经日历</a></dd>
          <dd><a href="">名师专栏</a></dd>
        </dl>
        <dl>
          <dt>德媒体</dt>
          <dd><a href="">金融说天下</a></dd>
          <dd><a href="">财经日历</a></dd>
          <dd><a href="">交易学堂</a></dd>
        </dl>
        <dl>
          <dt>软件中心</dt>
          <dd><a href="">智能决策系统（PC）</a></dd>
          <dd><a href="">智能决策系统（IOS）</a></dd>
          <dd><a href="">智能决策系统（Android）</a></dd>
        </dl>
        <dl>
          <dt>钱阁</dt>
          <dd><a href="">热门钱阁</a></dd>
          <dd><a href="">热门话题</a></dd>
          <dd><a href="">热门文章</a></dd>
          <dd><a href="">热门活动</a></dd>
          <dd><a href="">个人中心</a></dd>
        </dl>
        <dl>
          <dt>金融超市</dt>
          <dd><a href="">股票</a></dd>
          <dd><a href="">期货</a></dd>
          <dd><a href="">现货</a></dd>
          <dd><a href="">基金</a></dd>
          <dd><a href="">债券</a></dd>
          <dd><a href="">期权</a></dd>
          <dd><a href="">保险</a></dd>
        </dl>
      </div>
      <div class="foo">
        <div class="foo-nav">
          <ul class="list-inline">
            <li class="f-1"><a href="">联系我们</a></li>
            <li class="f-2"><a href="">关于我们</a></li>
          </ul>
        </div>
        <p>上海雷悦信息技术服务有限公司&nbsp;&nbsp;版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<style scoped>
  .footer {
    background-color: #5d5d5d;
    overflow: hidden;
    width: 100%;
    margin-top: 20px;
  }

  .footer .fo {
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
  }

  .footer .fo span {
    color: #fff;
  }


  .footer .f-nav dl {
    display:inline-block;
    vertical-align: top;
    width: 220px;
    margin-top: 22px;
  }

  .footer .f-nav dl dt {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .footer .f-nav dl dd a {
    color: rgba(255,255,255,0.8);
    font-size: 12px;
  }

  .footer .foo {
    margin: auto;
    width: 1200px;
    height: 60px;
    overflow: hidden;
    margin-top: 50px;
    border-top: 1px solid #666;
    clear: both;
  }

  .footer .foo .foo-nav {
    float: left;
    margin-top: 10px;
  }

  .footer .foo .foo-nav ul li {
    float: left;
    height: 20px;
    width: 100px;
  }

  .f-1::before {
    content: " ";
    width: 1px;
    height: 16px;
    margin-top: 2px;
    margin-left: 77px;
    background: #aeaeae;
    position: absolute;
  }

  .footer .foo .foo-nav ul li a {
    color: rgba(255,255,255,0.8);
  }

  .footer .foo p {
    float: right;
    color: rgba(255,255,255,0.8);
    margin-top: 10px;
  }
</style>
