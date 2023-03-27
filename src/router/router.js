// import { createRouter, createWebHistory } from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'

// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
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
    //   path: '/services',
    //   name: 'services',
    //   component: ServicesView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router