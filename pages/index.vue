<template>
  <div class="xl:container mx-auto">
    <section class="parallax parallax--hero">
      <div id="growing" class="w-full h-screen mx-auto flex pl-5 xl:container">
        <Growing class="w-screen h-auto self-center" />
      </div>
    </section>

    <Summary />
    <div class="py-24"></div>
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

export default {
  components: { Growing, Services, Divider, Summary, Experience, Contact },
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

<style></style>
