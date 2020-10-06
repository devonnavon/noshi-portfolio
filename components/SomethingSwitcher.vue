<template>
  <div>
    <div id="somethingintheway" class="overflow-hidden">(something)</div>
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
      next: [0, 0],
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
      //   mask.style.width = `${width}px`
      //   mask.style.height = `${height * 2}px`

      gsap.registerPlugin(ScrollTrigger)
      let tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
      })
      let id = '#somethingintheway'

      tl.to(id, {
        repeat: 1,
        y: height,
        duration,
        ease: 'none',
        yoyo: true,
      })

      ScrollTrigger.create({
        animation: tl,
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
