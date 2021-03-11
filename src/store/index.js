import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }
  },
  mutations: {
    createTask (state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeTask (state, task) {
      const idx = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[idx] = task
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask ({ commit }, task) {
      if (task.deadline < new Date()) {
        task.status = 'canceled'
      }
      commit('createTask', task)
    },
    changeTask ({ commit }, task) {
      commit('changeTask', task)
    }
  },
  getters: {
    getActiveTasks: state => (state.tasks.filter(e => e.status === 'active')).length,
    tasks: state => state.tasks,
    taskById (_, getters) {
      return id => getters.tasks.find(t => t.id === id)
    }
  }
})
