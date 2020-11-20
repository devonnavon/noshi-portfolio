<template>
  <div class="xl:container mx-auto h-auto md:h-full">
    <Summary />
    <div
      class="py-24 font-minimedium text-black text-center md:px-32 px-16 text-base"
    >
      We like to create experiences for clients that care as much about design
      as we do but may not have the technical capabilities to build it
      themselves. Our design and development experience allows us to realize
      solutions that are on the cutting edge of technology without losing
      personality and playfulness.
    </div>
    <Boxes />
    <Services />
    <CaseCard
      v-for="(work, i) in featuredWorks"
      :key="i"
      :work="work"
      class="pt-24"
    />
    <Experience />
    <Contact />
  </div>
</template>

<script>
import Growing from '~/components/Growing'
import Services from '~/components/Homepage/HServices'
import Divider from '~/components/Homepage/Divider'
import Summary from '~/components/Homepage/Summary'
import Experience from '~/components/Homepage/Experience'
import Contact from '~/components/ContactFooter'
import Boxes from '~/components/Homepage/Boxes'
import CaseCard from '~/components/WorkPage/CaseCard'

export default {
  components: {
    Growing,
    Services,
    Divider,
    Summary,
    Experience,
    Contact,
    Boxes,
    CaseCard,
  },
  head() {
    return {
      title: 'noshi',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  mounted() {
    console.log(this.featuredWorks)
  },
  async asyncData({ $content }) {
    const settings = await $content('settings/general').fetch()
    const works = await $content('work').fetch()
    const featuredWorks = works.filter((e) =>
      settings.featuredCases.includes(e.slug)
    )
    return {
      settings,
      featuredWorks,
    }
  },
  async fetch({ store }) {
    if (
      store.state.servicesDetail.length === 0 ||
      store.state.servicesList.length === 0
    )
      await store.dispatch('fetchServices')
  },
}
</script>

<style>
#parallax {
  z-index: '-1';
}

html {
  scroll-behavior: smooth;
}
</style>
