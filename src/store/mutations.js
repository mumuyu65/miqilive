/**
 * Created by yangyangyu on 17/6/26.
 */
export default {
    CHANGE_LOGINWAY(state, loginway) {
            state.loginway = loginway
        },

        CHANGE_USER(state, value) {
            state.user = value
        },

        CHANGE_ISLOGIN(state, value) {
            state.islogin = value
        }
}