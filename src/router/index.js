import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'; 

const routes = [
  {path: '/', name: 'home', component: Home },
  {path: '/relatorio', name: 'relatorio', component: () => import('../views/RelatorioProduto.vue') },
  {path: '/filtro', name: 'filtro', component: () => import('../components/util/Filtro.vue') },
  {path: '/financeiro', name: 'financeiro', component: () => import('../views/Financeiro.vue'),
    props:{}
  },
  {path: '/estoque', name: 'estoque', component: () => import('../views/Estoque.vue')},
]

const router = createRouter({

  history: createWebHistory(),
  routes, 
})

export default router;