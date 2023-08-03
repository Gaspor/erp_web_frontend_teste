import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'; 

const routes = [
  { path: '/', component: Home },
  {path: '/relatorio', component: () => import('../views/Relatorio.vue') }
]

const router = createRouter({

  history: createWebHistory(),
  routes, 
})

export default router;