<template>
  <div>
    <section class="parallax parallax--hero">
      <div id="growing" class="w-full h-screen mx-auto flex pl-5 xl:container">
        <Growing class="w-screen h-auto self-center" />
      </div>
    </section>
    <section class="parallax parallax--about bg-pink">
      <div id="whatwedo" class="text-2xl font-display">
        <div
          class="text-green text-opacity-50 absolute inset-x-0 top-0 pl-10 pt-10"
        >
          what we like to do...
        </div>
        <!-- <HomepageServices /> -->
      </div>
    </section>
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
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      gsap.registerPlugin(ScrollTrigger)

      // gsap.utils.toArray('section').forEach((section, i) => {
      //   ScrollTrigger.create({
      //     trigger: section,
      //     start: 'top top',
      //     pin: true,
      //     pinSpacing: false,
      //   })
      // })
    },
  },
}
</script>

<style>
section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  font-size: 3rem;
  font-family: 'Poppins', sans-serif;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
