<template>
  <div class="xl:container mx-auto h-auto md:h-full">
    <!-- <section class="parallax parallax--hero h-full">
      <div
        id="growing"
        class="w-full h-full mx-auto flex flex-wrap xl:container justify-center"
      >
        <div
          class="w-screen h-full flex flex-col justify-items-center self-center sm:py-48 mx-6"
        >
          <Growing class="" />
          <ScrollAnchor
            anchor="summary"
            class="self-center justify-self-center text-center sm:mt-auto -mt-24 font-display text-l text-green"
            >take a look
          </ScrollAnchor>
        </div>
      </div>
    </section> -->

    <Summary />
    <div class="md:py-24"></div>
    <Services />
    <CaseCard v-for="(work, i) in featuredWorks" :key="i" :work="work" />
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
import ScrollAnchor from '~/components/Homepage/ScrollAnchor'
import CaseCard from '~/components/WorkPage/CaseCard'

export default {
  components: {
    Growing,
    Services,
    Divider,
    Summary,
    Experience,
    Contact,
    ScrollAnchor,
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
