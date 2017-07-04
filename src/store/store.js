import Vue from 'vue'

import Vuex from 'vuex'

import * as actions from './actions'

import mutations from './mutations'

import * as getters from './getters'

Vue.use(Vuex)

const state = {
    loginway: 'login',
    user: {
        Nick: '游客',
        Beans: 0,
    },
    userOnline: 0,
    giftNum: 1,
    giftSelected: '',
    lastGiftNum: 1,
    sendGift: false,
    gifts: [],
    isLogin: false,
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})