<template>
  <div id="container" class="bg-orange bg-auto mx-auto h-full w-full">
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
  },
}
</script>
<style></style>
