import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import TableView from '../views/TableView.vue'
import TablelistView from '../views/TablelistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about/:id',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TableView 
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/list',
      name: 'list',
      component: TablelistView 
    }
  ]
})

export default router
