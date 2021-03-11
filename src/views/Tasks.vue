<template>
  <app-page title="Список заявок">
    <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>

    <template v-else>
      <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
      <app-task
        v-for="task in tasks"
        :key="task.id"
        :title="task.title"
        :deadline="task.deadline"
        :status="task.status"
        :id="task.id"
      ></app-task>
    </template>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import AppTask from '@/components/AppTask'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const activeTasks = computed(() => store.getters.getActiveTasks)
    const tasks = computed(() => store.getters.tasks)
    return {
      activeTasks,
      tasks
    }
  },
  components: {
    AppTask,
    AppPage
  }
}
</script>
