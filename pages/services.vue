<template>
  <div id="#container" class="w-full h-screen bg-pink">
    <ServicesLanding />
    <Services />
    <DesignDevelop />
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import Services from '~/components/ServicesPage/Services'
import DesignDevelop from '~/components/ServicesPage/DesignDevelop'

export default {
  components: {
    ServicesLanding,
    Services,
    DesignDevelop,
  },
}
</script>

<style></style>
