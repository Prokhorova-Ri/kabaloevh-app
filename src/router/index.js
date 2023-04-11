import { createRouter, createWebHistory } from 'vue-router';
import Main from "/src/views/index.vue";
import About from "/src/views/about/index.vue";
import Contacts from "/src/views/contacts/index.vue";
import Price from "/src/views/price/index.vue";
import Reviews from "/src/views/reviews/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/price',
      name: 'Price',
      component: Price,
      meta: { layout: 'default-layout' }
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews,
      meta: { layout: 'default-layout' }
    },
  ]
})

export default router
