import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    submit (state, payload) {
      state.tasks.push({
        id: Date.now().toString(),
        title: payload.title,
        deadline: payload.date,
        description: payload.descr,
        status: 'active'
      })
    },
    changeStatus (state, payload) {
      const task = state.tasks.find(e => e.id === payload.id)
      task.status = payload.status
    }
  },
  actions: {
  },
  modules: {
  }
})
