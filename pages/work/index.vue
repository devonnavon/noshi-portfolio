<template>
  <div>
    <div class="gradient-background md:pb-24 pb-10">
      <div id="work-container" class="xl:container mx-auto md:px-8 px-8">
        <div
          class="relative text-green font-display sm:text-big lg:text-hugexl text-5xl md:pt-32 pt-16 leading-tight"
        >
          <div>Some of our works for your viewing pleasure.</div>
        </div>
      </div>
    </div>
    <div class="xl:container mx-auto pb-24 md:pb-0">
      <CaseCard v-for="(work, i) in getWorkCases" :key="i" :work="work" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import CaseCard from '~/components/WorkPage/CaseCard'

export default {
  head() {
    return {
      title: 'work',
    }
  },
  components: {
    CaseCard,
  },
  computed: mapGetters(['getWorkCases']),
  async fetch({ store }) {
    await store.dispatch('fetchWorkCases')
  },
}
</script>

<style>
.gradient-background {
  background: linear-gradient(180deg, #ffffff 0%, #d8cbcf 99%);
}
</style>
