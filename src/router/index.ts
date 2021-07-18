import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '../views/Money.vue'
import Statistics from '../views/Statistics.vue'
import NotFound from '../views/NotFound.vue'
import Additems from '../views/Additems.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
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
  {
    path: '/additem',
    component: Additems
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
