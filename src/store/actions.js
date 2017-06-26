/**
 * Created by yangyangyu on 17/6/26.
 */
export const changeLoginway = ({
    commit
}, loginway) => {
    commit('CHANGE_LOGINWAY', loginway)
}


export const changeIsLogin = ({
    commit
}, value) => {
    commit('CHANGE_ISLOGIN', value)
}