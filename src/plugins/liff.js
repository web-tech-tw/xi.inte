import Vue from 'vue'

class LIFF {
}

LIFF.install = async function (Vue) {
    if (!window.liff) {
        console.error("LIFF v2 SDK was not found.")
        return
    }
    await window.liff.init({liffId: process.env.VUE_APP_LIFF_ID})
    if (!window.liff.isLoggedIn() && location.hash !== "#/") {
        location.href = "#/"
    }
    Vue.prototype.$liff = window.liff
}

Vue.use(LIFF)

export default new LIFF()
