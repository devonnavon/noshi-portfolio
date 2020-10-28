<template>
  <div>
    <div class="gradient-background md:pb-24 pb-10">
      <div id="work-container" class="xl:container mx-auto md:px-6 px-3">
        <div
          class="relative text-green font-display sm:text-big lg:text-hugexl text-5xl md:pt-32 pt-16 leading-tight"
        >
          <div>Some of our works for your viewing pleasure.</div>
        </div>
      </div>
    </div>
    <div class="xl:container mx-auto md:px-6 px-3">
      <CaseCard v-for="(work, i) in works" :key="i" :work="work" />
    </div>
  </div>
</template>

<script>
import CaseCard from '~/components/WorkPage/CaseCard'

export default {
  head() {
    return {
      title: 'work',
    }
  },
  async asyncData({ $content }) {
    const works = await $content('work').fetch()
    return {
      works,
    }
  },
  components: {
    CaseCard,
  },
}
</script>

<style>
/* @media only screen and (min-width: 768px) {
  #work-header {
    line-height: 158px;
  }
} */

.gradient-background {
  background: linear-gradient(180deg, #ffffff 0%, #d8cbcf 99%);
}
</style>
