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

        CHANGE_ONLINE_PEOPLE(state, value) {
            state.userOnline = value
        },

        CHANGE_Gift_NUM(state, value) {
            state.giftNum = parseInt(value) + 1;
        },

        CHANGE_Gift_Selected(state, value) {
            state.giftSelected = value
        },

        CHANGE_last_Gift_Num(state, value) {
            state.lastGiftNum = value;
        },

        SEND_GIFT(state, value) {
            state.sendGift = value;
        },

        CHANGE_GIFTS(state, value) {
            state.gifts = value;
        },

        CHANGE_Login(state, value) {
            state.isLogin = value;
        },

}