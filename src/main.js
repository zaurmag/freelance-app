/**
 * Статусы: ['active', 'done', 'cancelled', 'pending']
 * Composition API
 * Vuex
 * Сохранение данных (как мининимум в localStorage)
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './theme.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
