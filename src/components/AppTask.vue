<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <AppStatus :type="status" />
    </h2>
    <p>
      <strong>
        <small>
          {{new Date().toLocaleDateString()}}
        </small>
      </strong>
    </p>
    <router-link :to="'/task/' + id">
      <button class="btn primary">Посмотреть</button>
    </router-link>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  props: ['title', 'status', 'id'],
  components: {
    AppStatus
  }
}
</script>
