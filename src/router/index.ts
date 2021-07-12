import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money  from '../views/Money.vue'
import Statistics from '../views/Statistics.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/statistics',
    component: Statistics
  },
]

const router = new VueRouter({
  routes
})

export default router