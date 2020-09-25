<template>
  <div>
    <section class="parallax parallax--hero">
      <div id="growing" class="w-full h-screen mx-auto flex pl-5 xl:container">
        <Growing class="w-screen h-auto self-center" />
      </div>
    </section>
    <HomepageServices />
    <section class="parallax parallax--featured bg-orange">
      FEATURED SECTION
    </section>
    <section class="parallax parallax--footer bg-pink">FOOTER</section>
  </div>
</template>

<script>
import Growing from '~/components/Growing'
import HomepageServices from '~/components/HomepageServices'

export default {
  components: { Growing, HomepageServices },
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
