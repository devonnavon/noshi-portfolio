<template>
  <div id="#container" class="w-full h-screen">
    <ServicesLanding />
    <Services />
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import Services from '~/components/ServicesPage/Services'

export default {
  components: {
    ServicesLanding,
    Services,
  },
}
</script>

<style></style>
