import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../views/Catalog.vue'
// import Movies from '../views/Movies.vue'
// import ServicesView from '../views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Catalog
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
    }
  ]
})

export default router