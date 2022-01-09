import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import ItemList from './components/pages/ItemList.vue'
import ItemDetail from './components/pages/ItemDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/item/list',
    name: 'ItemList',
    component: ItemList,
  },
  {
    path: '/item/detail',
    name: 'ItemDetail',
    component: ItemDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router