<template>
  <section id="whatwedo" class="bg-pink">
    <div class="relative flex font-display h-screen">
      <div
        class="text-2xl text-green text-opacity-50 absolute inset-x-0 top-0 pl-10 pt-5"
      >
        what we like to do
      </div>
      <div
        id="services"
        class="flex flex-col justify-center text-green text-6xl w-2/5 pl-16 pt-16 pb-16"
      >
        <div
          id="design"
          class="py-8"
          @click="clickable ? serviceClick('design') : null"
        >
          design
        </div>
        <div
          id="develop"
          class="py-8"
          @click="clickable ? serviceClick('develop') : null"
        >
          develop
        </div>
        <div
          id="etc"
          class="py-8"
          @click="clickable ? serviceClick('etc') : null"
        >
          etc.
        </div>
      </div>
      <div class="relative bg-green w-3/5">
        <div
          v-for="item in servicesDetail"
          :key="item.key"
          :id="`${item.key}-detail`"
          class="absolute inset-0 flex flex-col justify-center text-2xl text-white pl-16"
        >
          <div v-for="(detail, i) in item.details" :key="i" class="py-6">
            {{ detail }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.scrollAnimate()
  },
  data() {
    return {
      clickable: false,
      currentService: null,
      servicesDetail: [
        {
          key: 'design',
          details: [
            'ux/ui design',
            'prototyping',
            'graphic design',
            'package design',
            'creative direction',
          ],
        },
        {
          key: 'develop',
          details: [
            'website',
            'application',
            'desktop',
            'mobile',
            'vuejs',
            'nodejs',
            'JAMstack',
          ],
        },
        {
          key: 'etc',
          details: [
            'ux strategy',
            'innovation workshops',
            'business model design',
            'analytics',
            'data science',
            'machine learning',
          ],
        },
      ],
    }
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
        .add('design')
        .from(
          //design big text comes in
          '#design',
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
        //DEVELOP LABEL
        .add('develop')
        .from(
          //develop big text comes in
          '#develop',
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
        //ETC LLABEL
        .add('etc')
        .from(
          '#etc',
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
        .add('end')

      ScrollTrigger.create({
        animation: tl,
        trigger: '#whatwedo',
        start: 'top top',
        end: '+=4000',
        pin: true,
        // pinSpacing: false,
        scrub: 1,
        // once: true,
        anticipatePin: 1,
        onLeave: (self) => {
          //disable scroll and set current state back
          self.disable()
          gsap.set('#etc-detail', {
            y: 0,
            opacity: 100,
          })
          gsap.set('#design', { x: 0 })
          gsap.set('#develop', { x: 0 })
          gsap.set('#etc', { x: 0 })
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
