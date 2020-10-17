<template>
  <div id="container" class="bg-pink mx-auto h-full min-h-full w-full">
    <NavBar
      id="nav"
      class="fixed inset-x-0 md:top-0 bottom-0 md:pt-6 pb-1 h-24 z-40"
    />
    <Nuxt id="body" class="w-full h-full" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
  },
  computed: { ...mapState(['page']) },
}
</script>
<style></style>
