<template>
  <div class="xl:container mx-auto">
    <section class="parallax parallax--hero">
      <div
        id="growing"
        class="w-full h-screen mx-auto flex flex-wrap xl:container justify-center"
      >
        <div
          class="w-screen h-auto flex flex-col justify-items-center self-center md:px-0 px-4 md:-mt-0 -mt-16"
        >
          <Growing class="" />
          <ScrollAnchor class="self-center justify-self-center text-center" />
        </div>
      </div>
    </section>

    <Summary />
    <div class="md:py-24"></div>
    <Services />
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
import Contact from '~/components/Homepage/HContact'
import ScrollAnchor from '~/components/Homepage/ScrollAnchor'

export default {
  components: {
    Growing,
    Services,
    Divider,
    Summary,
    Experience,
    Contact,
    ScrollAnchor,
  },
  head() {
    return {
      title: 'noshi',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
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
