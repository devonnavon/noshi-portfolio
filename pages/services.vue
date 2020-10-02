<template>
  <div id="#container" class="w-full h-screen bg-pink">
    <ServicesLanding />
    <Services />
    <DesignDevelop />
    <WhatYouSee />
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import Services from '~/components/ServicesPage/Services'
import DesignDevelop from '~/components/ServicesPage/DesignDevelop'
import WhatYouSee from '~/components/ServicesPage/WhatYouSee'

export default {
  components: {
    ServicesLanding,
    Services,
    DesignDevelop,
    WhatYouSee,
  },
}
</script>

<style></style>
