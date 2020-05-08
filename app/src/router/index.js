import Vue from 'vue'
import VueRouter from 'vue-router'
import { MenuArray } from '../views/HomeChild/MenuArray';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: MenuArray.map(item =>
      item.child.map(childitem => ({ path: childitem.to, name: childitem.name, component: () => import(`../views/HomeChild/${childitem.to.slice(1)}.vue`) }))
    ).flat(Infinity)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
