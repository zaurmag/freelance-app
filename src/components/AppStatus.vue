<template>
  <span :class="['badge', statusValue.theme]">{{ statusValue.text }}</span>
</template>

<script>
export default {
  props: ['type'],
  data () {
    return {
      statuses: [
        {
          name: 'done',
          text: 'Завершен',
          theme: 'primary'
        },
        {
          name: 'active',
          text: 'Активный',
          theme: 'primary'
        },
        {
          name: 'canceled',
          text: 'Отменен',
          theme: 'danger'
        },
        {
          name: 'pending',
          text: 'Выполняется',
          theme: 'warning'
        }
      ]
    }
  },
  computed: {
    statusValue () {
      return this.statuses.find(e => e.name === this.type)
    }
  }
}
</script>
