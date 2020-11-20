<template>
  <div id="#container" class="xl:container mx-auto bg-pink md:px-6">
    <!-- <div class="xl:container mx-auto"> -->
    <ServicesLanding />
    <ServiceBox />
    <!-- <Services /> -->
    <DesignDevelop />
    <WhatYouSee />
    <Engagements />
    <Compensation />
    <Principles />

    <Contact />
    <!-- </div> -->
  </div>
</template>

<script>
import ServicesLanding from '~/components/ServicesPage/ServicesLanding'
import ServiceBox from '~/components/ServicesPage/ServiceBox'
import DesignDevelop from '~/components/ServicesPage/DesignDevelop'
import WhatYouSee from '~/components/ServicesPage/WhatYouSee'
import Engagements from '~/components/ServicesPage/Engagements'
import Compensation from '~/components/ServicesPage/Compensation'
import Principles from '~/components/ServicesPage/Principles'
import Contact from '~/components/ContactFooter'

export default {
  head() {
    return {
      title: 'noshi services',
    }
  },
  async fetch({ store }) {
    if (
      store.state.servicesDetail.length === 0 ||
      store.state.servicesList.length === 0
    )
      await store.dispatch('fetchServices')
  },
  components: {
    ServicesLanding,
    ServiceBox,
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
