<template>
  <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ tasks.length }}</h3>
    <app-task v-for="item in tasks" :key="item.id" :title="item.title" :deadline="item.deadline" :status="item.status" :id="item.id"></app-task>
  </template>
</template>

<script>
import AppTask from '@/components/AppTask'

export default {
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  components: {
    AppTask
  }
}
</script>
