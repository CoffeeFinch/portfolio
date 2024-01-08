import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AudioView',
    name: 'audio',
    component: () => import('../views/AudioView.vue')
  },
  {
    path: '/BrandingView',
    name: 'branding',
    component: () => import('../views/BrandingView.vue')
  },
  {
    path: '/CodingView',
    name: 'coding',
    component: () => import('../views/CodingView.vue')
  },
  {
    path: '/IllustrationView',
    name: 'illustration',
    component: () => import('../views/IllustrationView.vue')
  },
  {
    path: '/UXUIView',
    name: 'uxui',
    component: () => import('../views/UXUIView.vue')
  },
  {
    path: '/VideoView',
    name: 'video',
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/OuchyNumberView',
    name: 'ouchy',
    component: () => import('../views/OuchyNumberView.vue')
  },
  {
    path: '/BloodWheelScore',
    name: 'bloodWheel',
    component: () => import('../views/BloodWheelView.vue')
  },
  {
    path: '/SpinalFluidPongView',
    name: 'spinePong',
    component: () => import('../views/SpinalFluidPongView.vue')
  },
  {
    path: '/SpinalFluidPongViewVS',
    name: 'spinePongVS',
    component: () => import('../views/SpinalFluidPongViewVS.vue')
  },
  {
    path: '/PlinkoCounterView',
    name: 'plinko',
    component: () => import('../views/PlinkoCounterView.vue')
  },
  {
    path: '/TwoTruthsOneDieView',
    name: 'TwoTruthsOneDie',
    component: () => import('../views/TwoTruthsOneDieView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
