// this file is the router of ydd
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'SmallGame',
        component: Index
    }]
})