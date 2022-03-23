<template>
  <div>
    {{ msg || 'hello' }}
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
