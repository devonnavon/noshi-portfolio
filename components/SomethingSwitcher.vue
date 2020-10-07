<template>
  <div>
    <div id="somethingintheway" class="overflow-hidden">{{ starter }}</div>
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
      let duration = 1
      let something = document.getElementById('somethingintheway')

      let rect = something.getBoundingClientRect()
      let width = rect.right - rect.left
      let height = rect.bottom - rect.top
      console.log(height)
      let mask = document.getElementById('somethingmask')
      mask.style.width = `${width}px`
      mask.style.height = `${height * 2}px`

      gsap.registerPlugin(ScrollTrigger)
      let masterTL = gsap.timeline({
        delay: 1,
        repeat: -1,
      })
      let id = '#somethingintheway'

      this.servicesList.forEach((word, i) => {
        let tl = gsap.timeline()
        let hide = gsap.to(id, {
          y: height,
          duration,
          delay: 1,
          ease: 'elastic.in(1, 0.5)',
        })
        let show = gsap.to(id, {
          y: 0,
          duration,
          ease: 'elastic.out(1, 0.5)',
        })
        tl.add(hide).set(id, { text: word }).add(show)
        if (i + 1 === this.servicesList.length) {
          tl.add(hide).set(id, { text: this.starter }).add(show)
        }

        masterTL.add(tl)
      })

      ScrollTrigger.create({
        animation: masterTL,
        trigger: this.triggerId,
        start: 'top center',
        markers: true,
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
