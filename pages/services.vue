<template>
  <div id="#container" class="w-full h-screen bg-pink">
    <ServicesLanding />
    <Services />
    <DesignDevelop />
    <WhatYouSee />
    <Engagements />
    <Compensation />
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import Services from '~/components/ServicesPage/Services'
import DesignDevelop from '~/components/ServicesPage/DesignDevelop'
import WhatYouSee from '~/components/ServicesPage/WhatYouSee'
import Engagements from '~/components/ServicesPage/Engagements'
import Compensation from '~/components/ServicesPage/Compensation'

export default {
  components: {
    ServicesLanding,
    Services,
    DesignDevelop,
    WhatYouSee,
    Engagements,
    Compensation,
  },
}
</script>

<style></style>
