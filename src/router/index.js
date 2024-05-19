import Vue from 'vue'
import VueRouter from 'vue-router'
import authMiddleware from '@/services/middleware';

import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AddressesView from '@/views/AddressesView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ShoppingBagView from '@/views/ShoppingBagView.vue'
import OrderView from '@/views/OrderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    beforeEnter: authMiddleware.login,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/addresses',
    name: 'addresses',
    component: AddressesView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/shopping-bag',
    name: 'shoppingBag',
    component: ShoppingBagView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView,
    beforeEnter: authMiddleware.auth,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
