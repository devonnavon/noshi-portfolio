<template>
  <div class="flex flex-col font-display text-green md:py-8 py-4">
    <div class="flex flex-row text-2xl opacity-50 pb-2 hidden md:inline-block">
      {{ client }}
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col w-1/4 md:w-1/3 flex-shrink-0">
        <div class="case-thumbnail">
          <img :src="thumbnail" class="w-full h-auto" alt="" />
        </div>
      </div>
      <div class="flex flex-col pl-4 w-2/3 md:w-auto">
        <div
          class="text-xl md:text-3xl xl:text-6xl leading-none w-3/4 md:w-2/3"
        >
          {{ title }}
        </div>
        <div class="text-lg opacity-50 pb-2 md:hidden">{{ client }}</div>
        <div class="text-base pt-2 md:w-full lg:w-3/4 hidden md:inline-block">
          {{ description }}
        </div>
      </div>
      <div class="text-3xl md:text-big self-center pl-4">
        <IconifyIcon class="" :icon="icons.sharpExpandMore" />
      </div>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'

import sharpExpandMore from '@iconify/icons-ic/sharp-expand-more'

export default {
  props: {
    title: String,
    client: String,
    description: String,
    thumbnail: String,
  },
  components: {
    IconifyIcon,
  },
  data() {
    return {
      icons: {
        sharpExpandMore,
      },
    }
  },
}
</script>

<style></style>
