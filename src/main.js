import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import liff from './plugins/liff'
import store from './store'

Vue.config.productionTip = false

new Vue({
    vuetify,
    i18n,
    liff,
    store,
    render: h => h(App)
}).$mount('#app')
