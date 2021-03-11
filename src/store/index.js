import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  mutations: {
    submit (state, payload) {
      const dateDeadline = new Date(payload.deadline)

      const data = {
        id: payload.id,
        title: payload.title,
        deadline: payload.deadline,
        description: payload.description,
        status: dateDeadline < new Date() ? 'canceled' : payload.status
      }

      state.tasks.push(data)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeStatus (state, payload) {
      const task = state.tasks.find(e => e.id === payload.id)
      task.status = payload.status
    }
  },
  getters: {
    getActiveTask: state => state.tasks.filter(e => e.status === 'active'),
    tasks: state => state.tasks
  }
})
