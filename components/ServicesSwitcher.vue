<template>
  <span id="switcharoo"></span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    this.animate()
  },
  computed: {
    ...mapGetters(['servicesList']),
  },
  methods: {
    animate() {
      // let cursor = gsap.to('.cursor', {
      //   opacity: 0,
      //   ease: 'power2.inOut',
      //   repeat: -1,
      // })
      let masterTl = gsap.timeline({ repeat: -1 })
      this.servicesList.forEach((word) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
        tl.to('#switcharoo', { duration: 0.1 * word.length, text: word })
        masterTl.add(tl)
      })
    },
  },
}
</script>

<style></style>
