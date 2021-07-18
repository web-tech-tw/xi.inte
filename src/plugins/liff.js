import Vue from 'vue'

class LIFF {
}

LIFF.install = function (Vue) {
    if (!window.liff) {
        console.error("LIFF v2 SDK was not found.")
        return
    }
    window.liff.init({
        liffId: "1656225814-84e21G6Q"
    })
    if (!window.liff.isLoggedIn() && location.hash !== "#/") {
        location.href = "#/"
    }
    Vue.prototype.$liff = window.liff
}

Vue.use(LIFF)

export default new LIFF()
