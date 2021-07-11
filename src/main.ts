import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import TopNav from '@/components/TopNav.vue'
import NavBottom from '@/components/NavBottom.vue'
Vue.config.productionTip = false

Vue.component('TopNav', TopNav)
Vue.component('NavBottom', NavBottom)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
