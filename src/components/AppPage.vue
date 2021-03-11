<template>
  <div class="back-to-records" v-if="back">
    <router-link to="/">Вернуться к заявкам</router-link>
  </div>
  <slot name="default"></slot>
</template>

<script>
export default {
  name: 'AppPage',
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    document.title = `${props.title} | Импровизированная фриланц биржа`
  }
}
</script>

<style scoped>
  .back-to-records {
    margin-bottom: 15px;
  }
</style>
