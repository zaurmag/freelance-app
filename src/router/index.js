import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '@/views/Tasks'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('@/views/New')
  },
  {
    path: '/task/:id',
    name: 'Task',
    props: true,
    component: () => import('@/views/Task')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
