<template>
  <span :class="['badge']">{{ type }}</span>
</template>

<script>
export default {
  props: ['type'],
  computed: {
    statusValue () {
      return this.$store.state.statuses
    }
  }
}
</script>
