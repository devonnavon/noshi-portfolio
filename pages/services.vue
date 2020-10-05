<template>
  <div id="#container" class="w-full h-screen bg-pink">
    <ServicesLanding />
    <Services />
    <DesignDevelop />
    <WhatYouSee />
    <Engagements />
    <Compensation />
    <Principles />
    <Contact />
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import Services from '~/components/ServicesPage/Services'
import DesignDevelop from '~/components/ServicesPage/DesignDevelop'
import WhatYouSee from '~/components/ServicesPage/WhatYouSee'
import Engagements from '~/components/ServicesPage/Engagements'
import Compensation from '~/components/ServicesPage/Compensation'
import Principles from '~/components/ServicesPage/Principles'
import Contact from '~/components/Homepage/Contact'

export default {
  components: {
    ServicesLanding,
    Services,
    DesignDevelop,
    WhatYouSee,
    Engagements,
    Compensation,
    Principles,
    Contact,
  },
}
</script>

<style></style>
