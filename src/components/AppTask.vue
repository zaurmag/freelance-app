<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <AppStatus :type="status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ new Date(deadline).toLocaleDateString() }}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click="go(id)">Посмотреть</button>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useRouter } from 'vue-router'

export default {
  props: ['title', 'deadline', 'status', 'id'],
  setup () {
    const router = useRouter()

    return {
      go: id => router.push(`/task/${id}`)
    }
  },
  components: {
    AppStatus
  }
}
</script>
