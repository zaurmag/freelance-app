<template>
  <div class="card">
    <h2 class="card-title">
      {{ title }}
      <AppStatus :type="status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ deadline }}
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
  props: ['title', 'deadline', 'status', 'id'],
  components: {
    AppStatus
  }
}
</script>
