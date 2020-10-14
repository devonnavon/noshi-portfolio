<template>
  <div id="#container" class="xl:container h-screen mx-auto bg-pink md:px-6">
    <ComingSoon />
  </div>
</template>

<script>
import ComingSoon from '~/components/WorkPage/ComingSoon'

export default {
  head() {
    return {
      title: 'coming soon...',
    }
  },
  components: {
    ComingSoon,
  },
}
</script>

<style></style>
