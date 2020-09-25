<template>
  <section id="whatwedo" class="parallax parallax--about bg-pink">
    <div class="relative flex font-display h-screen">
      <div
        class="text-2xl text-green text-opacity-50 absolute inset-x-0 top-0 pl-10 pt-5"
      >
        what we like to do...
      </div>
      <div
        id="services"
        class="flex flex-col justify-center text-green text-6xl w-2/5 pl-16 pt-16 pb-16"
      >
        <div id="design" class="py-8">design</div>
        <div id="develop" class="py-8">develop</div>
        <div id="etc" class="py-8">etc.</div>
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
    this.animate()
  },
  data() {
    return {
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
    animate() {
      gsap.registerPlugin(ScrollTrigger)

      gsap.set('#design-detail', {
        y: -600,
        opacity: 0,
      })
      gsap.set('#develop-detail', {
        y: -600,
        opacity: 0,
      })
      gsap.set('#etc-detail', {
        y: -600,
        opacity: 0,
      })

      const tl = gsap.timeline()
      tl.from('#design', {
        x: -400,
      })
        .to('#design-detail', {
          opacity: 100,
          y: 0,
        })
        .add('develop')
        .from(
          '#develop',
          {
            x: -400,
          },
          'develop'
        )
        .to(
          '#design-detail',
          {
            opacity: 0,
            y: 600,
          },
          'develop'
        )
        .to('#develop-detail', {
          opacity: 100,
          y: 0,
        })
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
        .to('#etc-detail', {
          opacity: 100,
          y: 0,
        })

      ScrollTrigger.create({
        animation: tl,
        trigger: '#whatwedo',
        start: 'top top',
        end: '+=4000',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      })
    },
  },
}
</script>

<style></style>
