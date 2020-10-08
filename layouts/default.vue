<template>
  <div id="container" class="bg-pink mx-auto h-full w-full">
    <NavBar
      id="nav"
      class="fixed inset-x-0 md:top-0 bottom-0 md:pt-6 pb-1 h-24 z-40"
    />
    <Nuxt id="body" class="w-full" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
  },
  computed: { ...mapState(['page']) },
  // mounted() {
  //   console.log()
  //   if (this.page === 'index') this.animate()
  //   else this.showNav()
  // },
  // watch: {
  //   page(newVal, oldVal) {
  //     console.log('hello')
  //     if (newVal === this.animate) this.animate()
  //     else this.showNav()
  //   },
  // },
  methods: {
    animate() {
      gsap.registerPlugin(ScrollTrigger)
      //set tweens
      gsap.set('#nav', {
        y: -600,
        opacity: 0,
      })
      gsap.to('#body', {
        yPercent: -100,
        ease: 'slow',
        scrollTrigger: {
          trigger: '#container',
          start: 'top top',
          end: '+=250',
          scrub: 1,
        },
      })
      gsap.to('#nav', {
        opacity: 100,
        delay: 3.5,
        stagger: 0.3,
        duration: 1.5,
        y: 0,
        ease: 'elastic.out(0.9, 1)',
        scrollTrigger: {
          trigger: '#container',
          start: 'top top',
          end: '+=250',
          scrub: 1,
        },
      })
    },
    showNav() {
      gsap.set('#nav', {
        y: 0,
        opacity: 100,
      })
    },
  },
}
</script>
<style></style>
