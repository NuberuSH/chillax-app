import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/trending'
    },
    {
      path: '/trending',
      name: 'trending',
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
     component: () => import('../components/LoadingScreen.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
     path: '/detailedInfo/:contentType/:id',
      props: route => ({
        id: Number(route.params.id),
        contentType: String(route.params.contentType)
      }),
     name: 'detailedInfo',
     component: () => import('../views/DetailedInfo.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('../views/Page404.vue')
    }

  ]
})

export default router