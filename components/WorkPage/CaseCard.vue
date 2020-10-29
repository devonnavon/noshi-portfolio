<template>
  <!-- test a change -->
  <div
    :id="getId('maindiv')"
    :class="active ? 'orange-gradient' : ''"
    class="rounded-2xl"
  >
    <div
      class="flex flex-col font-display text-green md:py-8 py-4 px-8 mx-auto"
    >
      <div class="flex-row text-2xl opacity-50 pb-2 hidden md:flex">
        {{ work.client }}
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col w-1/4 md:w-1/3 flex-shrink-0">
          <div class="case-thumbnail">
            <img :src="work.thumbnail" class="w-full h-auto" alt="" />
          </div>
        </div>
        <div class="flex flex-col pl-4 w-2/3 md:w-auto">
          <div
            class="text-xl md:text-3xl xl:text-6xl leading-none w-3/4 md:w-2/3"
          >
            {{ work.title }}
          </div>
          <div class="text-lg opacity-50 pb-2 md:hidden">{{ work.client }}</div>
          <div
            class="text-base pt-2 md:w-full lg:w-3/4 hidden md:inline-block text-justify"
          >
            {{ work.description }}
          </div>
        </div>
        <div
          v-show="!active"
          class="text-3xl md:text-big self-center pl-4"
          @click="active = !active"
        >
          <IconifyIcon :icon="icons.sharpExpandMore" />
        </div>

        <div
          v-show="active"
          class="text-3xl md:text-3xl self-start"
          @click="active = !active"
        >
          <IconifyIcon :icon="icons.bxX" />
        </div>
      </div>
      <div v-show="active" class="md:pt-12 pt-6 pb-6">
        <div class="flex md:flex-row flex-col-reverse">
          <div class="flex flex-col md:w-3/4 w-full pr-12">
            <div class="text-3xl pb-4">Overview</div>
            <div>{{ work.overview }}</div>
          </div>
          <div class="flex flex-col pb-2 md:pb-0">
            <div class="text-3xl md:pb-4 pb-2">Roles</div>
            <div class="flex flex-row md:flex-col justify-center">
              <div
                v-for="(role, i) in work.roles"
                :key="i"
                class="px-2 py-2 md:px-0 md:py-0 md:pb-1"
              >
                {{ role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'

import sharpExpandMore from '@iconify/icons-ic/sharp-expand-more'
import bxX from '@iconify/icons-bx/bx-x'

export default {
  mounted() {
    console.log(this.work)
  },
  props: {
    work: Object,
  },
  components: {
    IconifyIcon,
  },
  data() {
    return {
      icons: {
        sharpExpandMore,
        bxX,
      },
      active: false,
    }
  },
  watch: {
    active(newVal) {
      this.animateGradient(newVal)
    },
  },
  methods: {
    getId(element) {
      return `${element}-${this.work.slug}`
    },
    animateGradient(state) {
      let id = `#${this.getId('maindiv')}`
      if (state) {
        gsap.to(id, {
          background: 'linear-gradient(180deg, #f7941e 0%, #d8cbcf 90%)',
          duration: 2,
        })
      } else {
        gsap.to(id, { background: 'none', duration: 1 })
      }
    },
  },
}
</script>

<style>
/* .orange-gradient {
  background: linear-gradient(180deg, #f7941e 0%, #d8cbcf 90%);
  border-radius: 1rem;
} */
</style>
