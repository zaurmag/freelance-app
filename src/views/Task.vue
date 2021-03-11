<template>
  <app-page back title="Полное описание заявки">
    <div class="card" v-if="task">
      <h2>{{ task.title }}</h2>
      <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
      <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
      <p><strong>Описание</strong>: {{ task.description }}</p>
      <div>
        <button class="btn" @click="setStatus('pending')">Взять в работу</button>
        <button class="btn primary" @click="setStatus('done')">Завершить</button>
        <button class="btn danger" @click="setStatus('canceled')">Отменить</button>
      </div>
    </div>
    <h3 class="text-white center" v-else>
      Задачи с id = <strong>{{ id }}</strong> нет.
    </h3>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: ['id'],
  setup (props) {
    const store = useStore()
    const task = computed(() => store.getters.taskById(props.id))

    const setStatus = status => {
      store.dispatch('changeTask', {
        ...task.value,
        status
      })
    }

    return {
      task,
      setStatus
    }
  },
  components: {
    AppStatus,
    AppPage
  }
}
</script>
