<template>
  <div id="container" class="bg-orange bg-auto mx-auto h-full w-full">
    <!-- <div class="xl:container pt-6"> -->
    <!-- <div class="w-full h-auto mx-auto sm:py-24 py-6">
        <Growing class="w-full" />
    </div>-->
    <NavBar id="nav" class="sticky top-0 xl:container px-6 sm:px-12" />
    <div id="growing" class="w-full h-screen mx-auto flex pl-5 xl:container">
      <Growing class="w-full h-auto self-center" />
    </div>
    <Nuxt id="body" class="mx-auto px-6 sm:px-12" />
  </div>
  <!-- </div> -->
</template>

<script>
import NavBar from '~/components/NavBar'
import Plant from '~/components/Plant'
import Sun from '~/components/Sun'
import Growing from '~/components/Growing'

export default {
  components: {
    NavBar,
    Plant,
    Sun,
    Growing,
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      let controller = new ScrollMagic.Controller()
      let tl = new TimelineMax()
      gsap.registerPlugin(ScrollTrigger)

      // TweenLite.to('#noshi', 4, { position: 'fixed', top: '100px', delay: 1 })

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

      // tl.to('#nav', 0.001, {
      //   display: 'block',
      //   opacity: '100%',
      // })

      //set scrollmagic sceen

      // let scene = new ScrollMagic.Scene({
      //   triggerElement: '#body',
      //   triggerHook: 0.5,
      // })
      //   .addIndicators({
      //     colorTrigger: 'white',
      //     colorStart: 'white',
      //     colorEnd: 'white',
      //     indent: 5,
      //   })
      //   .setTween(tl)
      //   .addTo(controller)
    },

    navAnimate() {
      gsap.to('#nav', {
        opacity: 100,
        delay: 3.5,
        stagger: 0.3,
        duration: 1.5,
        y: 0,
        ease: 'elastic.out(0.9, 1)',
      })
      console.log('yo')
    },
  },
}
</script>
<style></style>
