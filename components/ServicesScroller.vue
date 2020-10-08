<template>
  <div class="flex">
    <div
      id="services"
      class="flex flex-col justify-center text-green text-5xl w-2/5 md:pl-16 pb-16 font-semibold"
    >
      <div
        id="designscroll"
        class="py-3 pt-16 ml-1 font-minibold cursor-pointer"
        @click="
          clickable && 'design' != currentService
            ? serviceClick('design')
            : null
        "
      >
        design
      </div>
      <div
        id="developscroll"
        class="py-3 ml-1 font-minisemi cursor-pointer"
        @click="
          clickable && 'develop' != currentService
            ? serviceClick('develop')
            : null
        "
      >
        develop
      </div>
      <div
        id="etcscroll"
        class="py-3 ml-1 font-minimedium cursor-pointer"
        @click="
          clickable && 'etc' != currentService ? serviceClick('etc') : null
        "
      >
        etc.
      </div>
    </div>

    <div class="relative w-3/5">
      <div
        v-for="item in servicesDetail"
        :key="item.key"
        :id="`${item.key}-detail`"
        class="absolute inset-0 flex flex-col justify-center text-2xl text-green pl-20 font-display"
      >
        <div v-for="(detail, i) in item.details" :key="i" class="py-1">
          {{ detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.scrollAnimate()
  },
  props: {
    trigger: String,
  },
  computed: {
    ...mapGetters(['servicesDetail']),
  },
  data() {
    return { clickable: false, currentService: null }
  },
  methods: {
    serviceClick(service) {
      //i should probably do this without a timeline huh?
      gsap.set(`#${service}-detail`, { opacity: 100, y: 0 }, 'x')
      const tl = gsap.timeline()
      tl.add('x')
        .to(`#${this.currentService}-detail`, { opacity: 0, y: 600 }, 'x')
        .from(`#${service}-detail`, { opacity: 0, y: -600 }, 'x')
      tl.play()
      this.currentService = service
    },
    scrollAnimate() {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline()
      tl
        //DESIGN LABEL
        .from(
          //design big text comes in
          '#designscroll',
          {
            x: -400,
          },
          'design'
        )
        .from(
          '#design-detail',
          {
            //design detail comes in
            opacity: 0,
            y: -600,
          },
          'design'
        )
        .add('design')
        //DEVELOP LABEL
        .from(
          //develop big text comes in
          '#developscroll',
          {
            x: -400,
          },
          'develop'
        )
        .to(
          //design detail leaves
          '#design-detail',
          {
            opacity: 0,
            y: 600,
          },
          'develop'
        )
        .from(
          '#develop-detail',
          {
            //develop detail comes in
            opacity: 0,
            y: -600,
          },
          'develop'
        )
        .add('develop')
        //ETC LLABEL
        .from(
          '#etcscroll',
          {
            x: -400,
          },
          'etc'
        )
        .to(
          '#develop-detail',
          {
            opacity: 0,
            y: 600,
          },
          'etc'
        )
        .from(
          '#etc-detail',
          {
            opacity: 0,
            y: -600,
          },
          'etc'
        )
        //END LABEL
        .add('etc')

      ScrollTrigger.create({
        animation: tl,
        trigger: this.trigger,
        start: 'top top',
        end: '+=4000',
        pin: true,
        scrub: 2,
        once: true,
        // pinSpacing: false,

        onLeave: (self) => {
          //disable scroll and set current state back
          console.log(self)
          self.revert()
          this.clickable = true //make text clickable
          this.currentService = 'etc'
        },
        snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
        },
      })
    },
  },
}
</script>

<style></style>
