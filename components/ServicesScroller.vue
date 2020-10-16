<template>
  <div id="servicesscroller" class="flex">
    <div
      id="services"
      class="flex flex-col justify-center text-green text-5xl w-2/5 md:pl-16 pb-16 font-semibold"
    >
      <div
        id="designscroll"
        class="py-3 pt-16 ml-1 font-minibold cursor-pointer text-green hover:text-opacity-100"
        :class="currentService !== 'design' ? 'text-opacity-50' : ''"
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
        class="py-3 ml-1 font-minisemi cursor-pointer text-green hover:text-opacity-100"
        :class="currentService !== 'develop' ? 'text-opacity-50' : ''"
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
        class="py-3 ml-1 font-minimedium cursor-pointer text-green hover:text-opacity-100"
        :class="currentService !== 'etc' ? 'text-opacity-50' : ''"
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
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  mounted() {
    this.scrollAnimate()
  },
  props: {
    trigger: String,
  },
  computed: {
    ...mapState(['lastScrollPosition']),
    ...mapGetters(['servicesDetail']),
  },
  data() {
    return { clickable: false, currentService: null }
  },
  methods: {
    ...mapActions(['updateAutoScrolling', 'updateLastScrollPosition']),
    revertPosition(ids) {
      //pass array
      ids.forEach((id) => {
        gsap.set(id, { x: 0, y: 0, opacity: 100 })
      })
    },
    serviceClick(service) {
      //i should probably do this without a timeline huh?
      gsap.set(`#${service}-detail`, { opacity: 100, x: 0, y: 0 }, 'x')
      const tl = gsap.timeline()
      tl.add('x')
        .to(`#${this.currentService}-detail`, { opacity: 0, x: 1000 }, 'x')

        .from(`#${service}-detail`, { opacity: 0, x: -1000 }, 'x')
      tl.play()
      this.currentService = service
    },
    scrollAnimate() {
      let y = 375
      let x = 400

      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline()
      tl
        //DESIGN LABEL
        .from(
          //design big text comes in
          '#designscroll',
          {
            x: -x,
            opacity: 0,
          },
          'design'
        )
        .from(
          '#design-detail',
          {
            //design detail comes in
            opacity: 0,
            y: -y,
          },
          'design'
        )
        .add('design')
        //DEVELOP LABEL
        .from(
          //develop big text comes in
          '#developscroll',
          {
            x: -x,
            opacity: 0,
          },
          'develop'
        )
        .to(
          //design detail leaves
          '#design-detail',
          {
            opacity: 0,
            y: y,
          },
          'develop'
        )
        .from(
          '#develop-detail',
          {
            //develop detail comes in
            opacity: 0,
            y: -y,
          },
          'develop'
        )
        .add('develop')
        //ETC LLABEL
        .from(
          '#etcscroll',
          {
            x: -x,
            opacity: 0,
          },
          'etc'
        )
        .to(
          '#develop-detail',
          {
            opacity: 0,
            y: y,
          },
          'etc'
        )
        .from(
          '#etc-detail',
          {
            opacity: 0,
            y: -y,
          },
          'etc'
        )
        //END LABEL
        .add('etc')

      ScrollTrigger.create({
        animation: tl,
        trigger: this.trigger,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 2,
        toggleActions: 'play none none none',
        onEnter: (self) => {
          this.updateAutoScrolling(true)
        },
        onLeaveBack: (self) => {
          this.updateAutoScrolling(false)
        },
        onLeave: (self) => {
          //disable scroll and set current state back
          self.disable(true)
          this.revertPosition([
            '#designscroll',
            '#developscroll',
            '#etcscroll',
            '#etc-detail',
          ])
          this.updateAutoScrolling(false)
          this.updateLastScrollPosition(this.lastScrollPosition - 3000) //make up for change in scrollposition

          // console.log(self.toggleActions, 'actions')
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

<style>
#servicesscroller {
  overflow: hidden;
}
</style>
