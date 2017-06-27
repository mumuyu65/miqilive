<template>
  <div class="header">
        <router-link to="/"><img src="../../static/win/images/logo.png" class="logo" /></router-link>
        <ul class="list-inline pull-right">
            <li style="margin-right:30px;">
                <a href="javascript:void(0)" @click="AddFavorite()">
                    <img src="../../static/images/desktop.png" alt="" />
                    <h4>添加到收藏夹</h4>
                </a>
            </li>
            <li><a href=""><img src="../../static/images/setting.png" alt="" /><h4>帮助中心</h4></a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'header',
  methods: {
    AddFavorite (){
        let url = window.location || 'http://www.miqilive.com';
        let title = document.title;
        let ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("360se") > -1) {
            alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
        } else if (ua.indexOf("msie 8") > -1) {
            window.external.AddToFavoritesBar(url, title); //IE8
        } else if (document.all) {
            try {
                window.external.addFavorite(url, title);
            } catch (e) {
                alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
            }
        } else if (window.sidebar) {
            window.sidebar.addPanel(title, url, "");
        } else {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    }
  }
}
</script>

<style scoped>
</style>
