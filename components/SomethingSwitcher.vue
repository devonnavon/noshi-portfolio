<template>
  <div>
    <div id="somethingintheway" class="overflow-hidden"></div>
    <div id="somethingmask" class="bg-pink absolute"></div>
  </div>
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

      let duration = 0.5
      let easeHide = 'elastic.in(1, 0.3)'
      let easeShow = 'elastic.out(1, 0.3)'

      let something = document.getElementById('somethingintheway')

      let rect = something.getBoundingClientRect()
      let width = rect.right - rect.left
      let height = rect.bottom - rect.top
      console.log(height)
      let mask = document.getElementById('somethingmask')
      mask.style.width = `${width * 2}px`
      mask.style.height = `${height}px`

      gsap.registerPlugin(ScrollTrigger)
      let masterTL = gsap.timeline({
        delay: 1,
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
/* #somethingmask {
  z-index: 1;
} */
</style>
