import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import List from './components/pages/item/List.vue'
import Detail from './components/pages/item/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/item/list',
    name: 'List',
    component: List,
  },
  {
    path: '/item/detail',
    name: 'Detail',
    component: Detail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
