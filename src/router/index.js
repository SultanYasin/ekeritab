import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
    }
  ]
})

export default router
