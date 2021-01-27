<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
    <app-task v-for="item in tasks" :key="item.id" :title="item.title" :status="item.status"></app-task>
  </template>
</template>

<script>
import AppTask from '@/components/AppTask'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      tasks: store.state.tasks
    }
  },
  components: {
    AppTask
  }
}
</script>
