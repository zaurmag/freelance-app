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
<!--    <router-link to="/task">-->
<!--      <button class="btn primary">Посмотреть</button>-->
<!--    </router-link>-->

    <router-link class="btn primary" to="/task">
      Посмотреть
    </router-link>

  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  props: ['title', 'status'],
  components: {
    AppStatus
  }
}
</script>
