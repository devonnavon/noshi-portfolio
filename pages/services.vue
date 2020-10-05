<template>
  <div id="#container" class="w-full h-screen bg-pink">
    <ServicesLanding />
    <Services />
    <DesignDevelop />
    <WhatYouSee />
    <Engagements />
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import Services from '~/components/ServicesPage/Services'
import DesignDevelop from '~/components/ServicesPage/DesignDevelop'
import WhatYouSee from '~/components/ServicesPage/WhatYouSee'
import Engagements from '~/components/ServicesPage/Engagements'

export default {
  components: {
    ServicesLanding,
    Services,
    DesignDevelop,
    WhatYouSee,
    Engagements,
  },
}
</script>

<style></style>
