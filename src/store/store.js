import Vue from 'vue'

import Vuex from 'vuex'

import * as getters from './getters'

import * as actions from './actions'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
    islogin: false,
    loginway: 'login',
    user: {}
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})