import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DetailedInfo from '../views/DetailedInfo.vue'
// import ServicesView from '../views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    // {
    //   path: '/detailedInfo',
    //   name: 'DetailedInfo',
    //   component: DetailedInfo
    // },
    {
      path: '/detailedInfo/:type/:id',
      props: true,
      name: 'DetailedInfo',
      component: DetailedInfo
    },
    // {
      // path: '/:type/:id',
      // name: '',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router