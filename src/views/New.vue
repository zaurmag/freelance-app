<template>
  <app-page back title="Создать новую заявку">
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
        <textarea id="description" v-model="description"></textarea>
      </div>

      <button class="btn primary" :disabled="!isValid">Создать</button>
    </form>
  </app-page>
</template>

<script>
import AppPage from '@/components/AppPage'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup (_, { commit }) {
    const title = ref('')
    const date = ref('')
    const description = ref('')
    const store = useStore()
    const router = useRouter()

    const isValid = computed(() => title.value !== '' && date.value !== '' && description.value !== '')
    const submitForm = () => {
      if (isValid.value) {
        store.commit('submit', {
          id: Date.now().toString(),
          title: title.value,
          deadline: date.value,
          description: description.value,
          status: 'active'
        })
        router.push('/')
      }
    }

    return {
      isValid,
      title,
      date,
      description,
      submitForm
    }
  },
  components: {
    AppPage
  }
}
</script>
