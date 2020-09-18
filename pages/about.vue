<template>
  <div>
    <h1>about us</h1>
  </div>
</template>
<script>
export default {
  asyncData() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>
