<template>
  <div>
    <h1>about us</h1>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'about noshi',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>
