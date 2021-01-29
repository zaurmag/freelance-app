<template>
  <form class="card" @submit.prevent="submitForm">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="descr"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      title: '',
      date: '',
      descr: ''
    }
  },
  computed: {
    isValid () {
      return this.title !== '' && this.date !== '' && this.descr !== ''
    }
  },
  methods: {
    ...mapMutations(['submit']),
    submitForm () {
      if (this.isValid) {
        this.submit({
          id: Date.now().toString(),
          title: this.title,
          deadline: this.date,
          description: this.descr,
          status: 'active'
        })
        this.$router.push('/')
      }
    }
  }
}
</script>
