import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/productAdmin',
    name: 'productAdmin',
    component: () => import('../views/ProductAdmin.vue')
  },
  {
    path: '/userAdmin',
    name: 'userAdmin',
    component: () => import('../views/UserAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
