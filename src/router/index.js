import { createRouter, createWebHistory } from 'vue-router'
import Main from '/src/views/index.vue'
import About from '/src/views/about/index.vue'
import Contacts from '/src/views/contacts/index.vue'
import Price from '/src/views/price/index.vue'
import Reviews from '/src/views/reviews/index.vue'
import DevIlya from '/src/views/dev-ilya/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/price',
      name: 'price',
      component: Price,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/dev-ilya',
      name: 'dev-ilya',
      component: DevIlya,
      meta: { layout: 'default-layout' }
    }
  ]
})

export default router
