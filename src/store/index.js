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
    }
  },
  actions: {
  },
  modules: {
  }
})
