<template>
  <div class="bg-orange h-full w-full">
    <div class="xl:container mx-auto px-6 sm:px-12 pt-6">
      <NavBar />
      <div
        class="flex items-center justify-center py-24 w-full max-w-4xl mx-auto"
      >
        <div class="border w-3/4 h-full relative">
          <div
            class="font-display text-green noshi-info absolute inset-y-0 left-0"
          >
            <div class="my-20">
              <div class="text-5xl">noshi</div>
              <div class="text-xl">Some tagline type thing</div>
            </div>
          </div>
          <Plant class="plant mt-32" />
          <Sun class="right-0 top-0 absolute" />
        </div>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Plant from '~/components/Plant'
import Sun from '~/components/Sun'

TweenLite.defaultEase = Linear.easeNone
var controller = new ScrollMagic.Controller()

export default {
  components: {
    NavBar,
    Plant,
    Sun,
  },
}
</script>
<style>
.plant {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.noshi-info {
}
</style>
