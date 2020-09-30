<template>
  <div id="#container" class="w-full h-screen">
    <ServicesLanding />
    <Services />
  </div>
</template>

<script>
import ServicesLanding from '~/components/Workpage/ServicesLanding'
import Services from '~/components/Workpage/Services'

export default {
  components: {
    ServicesLanding,
    Services,
  },
}
</script>

<style></style>
