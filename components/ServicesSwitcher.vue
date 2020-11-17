<template>
  <span><span :id="this.id" class="switcharoo"></span><span>&nbsp;</span></span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    id: String,
  },
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
        tl.to(`#${this.id}`, { duration: 0.1 * word.length, text: word })
        masterTl.add(tl)
      })
    },
  },
}
</script>

<style>
@media only screen and (max-width: 768px) {
  .switcharoo {
    min-height: 310px;
  }
}

.switcharoo {
  min-height: 77px;
}
</style>
