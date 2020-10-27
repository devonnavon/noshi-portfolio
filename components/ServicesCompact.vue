<template>
  <div class="flex md:justify-around">
    <div
      v-for="service in shown"
      :key="service.key"
      class="md:pr-4 md:pb-0 pb-10 serviceCompact"
    >
      <!-- <div class="md:w-20"> -->
      <div
        class="font-serif font-bold md:text-3xl text-4xl text-center md:text-left"
      >
        {{ service.key }}
      </div>
      <div>
        <div
          v-for="(detail, i) in service.details"
          :key="i"
          :id="`serviceCompact_${service.key}_${i}`"
          class="font-display md:text-xl text-2xl text-center md:text-left"
        >
          {{ detail }}
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    let shown = 4 //half of the length
    this.shown = this.servicesDetail.map((element) => {
      return { key: element.key, details: element.details.slice(0, shown) }
    })
    this.queue = this.servicesDetail.map((element) => {
      return { key: element.key, details: element.details.slice(shown) }
    })
  },
  mounted() {
    this.animate()
  },
  computed: {
    ...mapGetters(['servicesDetail']),
  },
  data() {
    return {
      shown: [],
      queue: [],
    }
  },
  methods: {
    animate() {
      let tl = gsap.timeline({ repeat: -1 })
      let len = 0.5
      let arrTo = []
      let arrFrom = []
      this.queue.forEach((service) => {
        service.details.forEach((detail, i) => {
          let key = `#serviceCompact_${service.key}_${i}`
          let tlQ = gsap.timeline()
          tlQ
            .to(key, { opacity: 0, duration: len })
            .to(key, { text: detail, duration: 0 })
            .to(key, { opacity: 1, duration: len })
          arrTo.push(tlQ)
        })
      })
      this.shown.forEach((service) => {
        service.details.forEach((detail, i) => {
          let key = `#serviceCompact_${service.key}_${i}`
          let tlS = gsap.timeline()
          tlS
            .to(key, { opacity: 0, duration: len })
            .to(key, { text: detail, duration: 0 })
            .to(key, { opacity: 1, duration: len })
          arrFrom.push(tlS)
        })
      })
      this.shuffleArray(arrTo)
      this.shuffleArray(arrFrom)
      arrTo.forEach((e) => {
        tl.add(e)
      })
      arrFrom.forEach((e) => {
        tl.add(e)
      })
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    },
  },
}
</script>

<style>
@media only screen and (min-width: 768px) {
  .serviceCompact {
    width: 30%;
    min-height: 220px;
  }
}
</style>
