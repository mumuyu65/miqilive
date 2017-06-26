// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Ydd from './Ydd'
import router from './router'
import $ from 'jquery'
import 'animate.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'

//关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.use(VueFullpage)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Ydd/>',
    components: {
        Ydd
    }
})