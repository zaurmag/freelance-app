<template>
  <div class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="'done'" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date().toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: Описание задачи</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      tasks: store.state.tasks
    }
  },
  components: {
    AppStatus
  },
  computed: {
    task () {
      return this.tasks.find(e => e.id === +this.$route.params.pathId)
    }
  }
}
</script>
