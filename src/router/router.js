import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Trending.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/Shows.vue')
    },
    {
     path: '/test',
     name: 'test',
     component: () => import('../components/MoviesListLite.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
     path: '/detailedInfo/:contentType/:id',
     props: true,
     name: 'DetailedInfo',
     component: () => import('../views/DetailedInfo.vue')
    },
  ]
})

export default router