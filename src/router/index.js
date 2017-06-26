// this file is the router of ydd
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import News from '@/pages/news'
import Bbs from '@/pages/bbs'
import HangQing from '@/pages/hangqing'
import Transactions from '@/pages/transactions'
import SmallVideo from '@/pages/smallvideo'
import Classes from '@/pages/classes'
import Economics from '@/pages/economics'
import ShopMall from '@/pages/shopmall'
import Security from '@/pages/security'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'SmallGame',
        component: Index
    }, {
        path: '/news',
        name: 'news',
        component: News
    }, {
        path: '/bbs',
        name: 'BBS',
        component: Bbs
    }, {
        path: '/hangqing',
        name: 'HangQing',
        component: HangQing
    }, {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
    }, {
        path: '/smallVideo',
        name: 'SmallVideo',
        component: SmallVideo
    }, {
        path: '/classes',
        name: 'Classes',
        component: Classes
    }, {
        path: '/economics',
        name: 'Economics',
        component: Economics
    }, {
        path: '/shopmall',
        name: 'ShopMall',
        component: ShopMall
    }, {
        path: '/security',
        name: 'Security',
        component: Security
    }]
})