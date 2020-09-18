<template>
  <div id="container" class="bg-orange bg-auto mx-auto h-full w-full">
    <NavBar id="nav" class="sticky top-0 xl:container px-6 sm:px-12" />
    <Nuxt id="body" class="mx-auto px-6 sm:px-12" />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
  },
  mounted() {
    // console.log($nuxt.$route.name, 'x')
    // this.animate()
  },
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
  },
}
</script>
<style></style>
