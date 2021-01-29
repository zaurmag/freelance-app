import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    submit (state, payload) {
      const dateDeadline = new Date(payload.deadline)
      const dateNow = new Date()

      state.tasks.push({
        id: payload.id,
        title: payload.title,
        deadline: payload.deadline,
        description: payload.description,
        status: dateDeadline < dateNow ? 'canceled' : payload.status
      })
    },
    changeStatus (state, payload) {
      const task = state.tasks.find(e => e.id === payload.id)
      task.status = payload.status
    }
  },
  getters: {
    getActiveTask (state) {
      return state.tasks.filter(e => e.status === 'active')
    }
  },
  actions: {
  },
  modules: {
  }
})
