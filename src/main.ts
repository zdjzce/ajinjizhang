import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import TopNav from '@/components/TopNav.vue'
import NavBottom from '@/components/NavBottom.vue'
import IconFont from '@/components/IconFont.vue'
import LayOut from '@/components/LayOut.vue'

Vue.config.productionTip = false

Vue.component('TopNav', TopNav)
Vue.component('NavBottom', NavBottom)
Vue.component('IconFont', IconFont)
Vue.component('LayOut', LayOut)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
