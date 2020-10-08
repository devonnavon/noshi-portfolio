<template>
  <div class="flex md:justify-around">
    <div
      v-for="service in shown"
      :key="service.key"
      class="md:pr-4 md:pb-0 pb-10"
    >
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted() {
    let shown = 3
    this.shown = this.servicesDetail.map((element) => {
      return { key: element.key, details: element.details.slice(0, shown) }
    })
    this.queue = this.servicesDetail.map((element) => {
      return { key: element.key, details: element.details.slice(shown) }
    })
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
      let tl = gsap.timeline()
    },
  },
}
</script>

<style></style>
