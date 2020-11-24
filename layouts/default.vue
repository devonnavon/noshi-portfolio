<template>
  <div id="container" class="bg-pink mx-auto h-full min-h-full w-full">
    <NavBar id="nav" class="fixed md:top-0 bottom-0 md:pt-6 pb-1 h-20 z-10" />
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
<style>
#nav {
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
