<template>
  <div class="bg-orange h-full w-full">
    <div class="xl:container mx-auto px-6 sm:px-12 pt-6">
      <NavBar id="nav" class="sticky top-0" />
      <!-- <div
        class="flex items-center justify-center py-24 w-full max-w-4xl mx-auto"
      >
        <div class="border w-3/4 h-full relative">
          <div
            class="font-display text-green noshi-info absolute inset-y-0 left-0"
          >
            <div class="my-20">
              <div id="noshi" class="text-5xl">noshi</div>
              <div class="text-xl">Some tagline type thing</div>
            </div>
          </div>
          <Plant class="plant mt-32" />
          <Sun id="sun" class="right-0 top-0 absolute" />
        </div>
      </div>-->
      <div class="w-full h-auto mx-auto sm:py-24 py-6">
        <Growing class="w-full" />
      </div>
      <Nuxt id="body" />
    </div>
  </div>
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

      // TweenLite.to('#noshi', 4, { position: 'fixed', top: '100px', delay: 1 })

      //set tweens
      tl.to('#nav', 0.001, {
        display: 'block',
        opacity: '100%',
      })

      //set scrollmagic sceen
      let scene = new ScrollMagic.Scene({
        triggerElement: '#body',
        triggerHook: 0,
      })
        .addIndicators({
          colorTrigger: 'white',
          colorStart: 'white',
          colorEnd: 'white',
          indent: 5,
        })
        .setTween(tl)
        .addTo(controller)
    },
  },
}
</script>
<style>
.plant {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  transform: scale(1);
}

#nav {
  display: none;
  opacity: 0;
}

.noshi-info {
}
</style>
