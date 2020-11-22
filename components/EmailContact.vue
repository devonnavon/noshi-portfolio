<template>
  <div class="relative">
    <div
      class="hover:text-orange cursor-pointer font-minisemi"
      @click="copySomething('hey@noshi.cx')"
    >
      (hey@noshi.cx)
    </div>

    <SmallAlert
      id="contactUsAlert"
      class="absolute mx-auto left-0 right-0 text-center"
      >copied to clipboard!</SmallAlert
    >
  </div>
</template>

<script>
import SmallAlert from '~/components/SmallAlert'
export default {
  mounted() {
    gsap.set('#contactUsAlert', { opacity: 0 })
  },
  components: {
    SmallAlert,
  },
  methods: {
    async copySomething(text) {
      try {
        await this.$copyText(text)
        this.animateAlert()
      } catch (e) {
        console.error(e)
      }
    },
    animateAlert() {
      let tl = gsap.timeline()

      tl.to('#contactUsAlert', {
        opacity: 1,
        duration: 1.5,
        ease: 'power1.out',
      }).to('#contactUsAlert', {
        opacity: 0,
        delay: 1,
        duration: 1,
      })
    },
  },
}
</script>

<style></style>
