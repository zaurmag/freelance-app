<template>
  <app-page back title="Полное описание заявки">
    <div class="card">
      <h2>{{ task.title }}</h2>
      <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
      <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
      <p><strong>Описание</strong>: {{ task.description }}</p>
      <div>
        <button class="btn" @click="btnHandler('pending')">Взять в работу</button>
        <button class="btn primary" @click="btnHandler('done')">Завершить</button>
        <button class="btn danger" @click="btnHandler('canceled')">Отменить</button>
      </div>
    </div>
    <h3 class="text-white center">
      Задачи с id = <strong>{{ task.id }}</strong> нет.
    </h3>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup (_, { commit }) {
    const store = useStore()
    const route = useRoute()
    const task = computed(() => store.state.tasks.find(e => e.id === route.params.id))

    const btnHandler = status => {
      store.commit('changeStatus', {
        id: task.value.id,
        status
      })
    }

    return {
      task,
      btnHandler
    }
  },
  components: {
    AppStatus,
    AppPage
  }
}
</script>
