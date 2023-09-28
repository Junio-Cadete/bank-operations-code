import { createRouter, createWebHistory } from 'vue-router'
import AgroSEV from '../views/Agro.vue'
import PJSEV from '../views/PJ-SEV.vue'
import HabitacaoSEV from '../views/Habitacao.vue'

const routes = [
  {
    path: '/Agro',
    name: 'Agro',
    component: AgroSEV
  },
  {
    path: '/',
    name: 'PJ',
    component: PJSEV
  },
  {
    path: '/Habitacao',
    name: 'Habitacao',
    component: HabitacaoSEV
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
