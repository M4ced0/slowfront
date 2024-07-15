import { createRouter, createWebHashHistory } from 'vue-router'
import authMiddleware from '@/services/middleware';

import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AddressesView from '@/views/AddressesView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ShoppingBagView from '@/views/ShoppingBagView.vue'
import OrderView from '@/views/OrderView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SalesView from '@/views/SalesView.vue'
// import SlideView from '@/views/SlideView.vue'
import CouponsView from '@/views/CouponsView.vue';
import MyAccountView from '@/views/MyAccountView.vue';

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
    
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/sales',
    name: 'sales',
    component: SalesView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/coupons',
    name: 'coupons',
    component: CouponsView,
    beforeEnter: authMiddleware.auth,
  },
  {
    path: '/my-account',
    name: 'my-account',
    component: MyAccountView,
    beforeEnter: authMiddleware.auth,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
