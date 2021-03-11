<template>
  <div class="card" v-if="task.id === $route.params.id">
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
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ task.id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { mapMutations } from 'vuex'

export default {
  components: {
    AppStatus
  },
  computed: {
    task () {
      return this.$store.state.tasks.find(e => e.id === this.$route.params.id)
    }
  },
  methods: {
    ...mapMutations(['changeStatus']),
    btnHandler (status) {
      this.changeStatus({
        id: this.task.id,
        status
      })
    }
  }
}
</script>
