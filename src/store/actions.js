/**
 * Created by yangyangyu on 17/6/26.
 */
export const changeLoginway = ({
    commit
}, loginway) => {
    commit('CHANGE_LOGINWAY', loginway)
}

export const changeUser = ({
    commit
}, value) => {
    commit('CHANGE_USER', value)
}

export const changeOnlinePeople = ({
    commit
}, value) => {
    commit('CHANGE_ONLINE_PEOPLE', value)
}

export const changeGiftNum = ({
    commit
}, value) => {
    commit('CHANGE_Gift_NUM', value)
}

export const changeGiftSelected = ({
    commit
}, value) => {
    commit('CHANGE_Gift_Selected', value)
}

export const changelastGiftNum = ({
    commit
}, value) => {
    commit('CHANGE_last_Gift_Num', value)
}

export const sendGift = ({
    commit
}, value) => {
    commit('SEND_GIFT', value)
}

export const changeGifts = ({
    commit
}, value) => {
    commit('CHANGE_GIFTS', value)
}


export const changeLogin = ({
    commit
}, value) => {
    commit('CHANGE_Login', value)
}

