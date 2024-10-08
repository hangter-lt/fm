import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/HelloWorld.vue'
import Edit from '../components/edit.vue'
import EditEdit from '../components/editedit.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/edit', component: Edit },
  { path: '/edit/1', component: EditEdit}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router