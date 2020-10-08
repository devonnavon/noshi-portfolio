<template>
  <div id="somethingintheway"></div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    triggerId: String,
  },
  mounted() {
    this.animate()
  },
  computed: {
    ...mapGetters(['servicesList']),
  },
  data() {
    return {
      starter: '(something)',
    }
  },
  methods: {
    animate() {
      let id = '#somethingintheway'
      gsap.set(id, { text: this.starter })

      let duration = 1.5
      let easeHide = 'elastic.in(1, 0.5)'
      let easeShow = 'elastic.out(1, 0.5)'

      let something = document.getElementById('somethingintheway')

      let rect = something.getBoundingClientRect()
      let height = rect.bottom - rect.top

      gsap.registerPlugin(ScrollTrigger)
      let masterTL = gsap.timeline({
        delay: 0.2,
        repeat: -1,
      })

      this.servicesList.forEach((word, i) => {
        let tl = gsap.timeline()
        let hide = gsap.to(id, {
          y: height,
          duration,
          delay: 1,
          ease: easeHide,
        })
        let show = gsap.to(id, {
          y: 0,
          duration,
          ease: easeShow,
        })
        tl.add(hide).set(id, { text: word }).add(show)

        masterTL.add(tl)
      })
      masterTL
        .to(id, {
          y: height,
          duration,
          delay: 1,
          ease: easeHide,
        })
        .set(id, { text: this.starter })
        .to(id, {
          y: 0,
          duration,
          ease: easeShow,
        })

      ScrollTrigger.create({
        animation: masterTL,
        trigger: this.triggerId,
        start: 'top center',
        // markers: true,
      })
    },
  },
}
</script>

<style scoped>
#somethingintheway {
  overflow: hidden;
}
</style>
