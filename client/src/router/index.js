import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'question',
    component: () => import(/* webpackChunkName: "home" */ '@/views/QuestionsView.vue')
  },
  {
    path: '/:id',
    name: 'choice',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ChoicesView.vue')
  },
  {
    path: '/add-pool',
    name: 'add-pool',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AddPoolView.vue')
  },
  {
    path: '/:id/result',
    name: 'results',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ResultsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
