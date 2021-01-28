import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Тестовое название задачи 1',
        deadline: 'дата',
        description: 'Описание...',
        status: 'active'
      },
      {
        id: 2,
        title: 'Тестовое название задачи 2',
        deadline: 'дата',
        description: 'Описание...',
        status: 'active'
      },
      {
        id: 3,
        title: 'Тестовое название задачи 3',
        deadline: 'дата',
        description: 'Описание...',
        status: 'active'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
