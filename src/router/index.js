import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: () => import('@/views/Tasks')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('@/views/New')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('@/views/Task'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/Task'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
