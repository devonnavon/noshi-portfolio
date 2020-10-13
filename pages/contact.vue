<template>
  <div id="#container" class="xl:container mx-auto bg-pink md:px-6">
    <Contact />
  </div>
</template>

<script>
import Contact from '~/components/ContactPage/Contact'

export default {
  head() {
    return {
      title: 'contact us',
    }
  },
  components: {
    Contact,
  },
}
</script>

<style></style>
