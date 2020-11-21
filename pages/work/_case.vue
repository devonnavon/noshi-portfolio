<template>
  <div class="xl:container mx-auto bg-pink md:px-6 pt-24">
    <div
      class="flex flex-col font-display text-green md:py-8 py-4 px-8 mx-auto"
    >
      <div v-if="work.client == 'NFL + Verizon'" class="pb-2 md:pb-0">
        <SlidingBanner
          id="featured1"
          class="font-display text-green text-xl"
          :length="9"
          :speed="30"
          >FEATURED ON APPLE KEYNOTE</SlidingBanner
        >
      </div>

      <div
        class="flex-row text-2xl opacity-50 hidden pl-0 pb-0 md:pb-1 md:flex font-minimedium"
      >
        {{ work.client }}
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col w-1/4 md:w-1/3 flex-shrink-0">
          <div class="case-thumbnail">
            <img :src="work.thumbnail" class="w-full h-auto p-0" alt="" />
          </div>
        </div>
        <div class="flex flex-col md:pl-4 pl-2 w-2/3 md:w-auto">
          <div
            class="text-lg md:text-3xl xl:text-5xl leading-none w-3/4 md:w-2/3 pt-1 md:pt-0 font-minisemi md:pb-4 pb-2"
          >
            {{ work.title }}
          </div>
          <div class="text-lg opacity-50 pb-2 md:hidden">{{ work.client }}</div>
          <div
            class="text-base font-serif pt-2 md:w-full lg:w-3/4 hidden md:inline-block text-justify pl-1 text-black"
          >
            {{ work.description }}
          </div>
        </div>
      </div>
      <div v-if="work.client == 'NFL + Verizon'" class="py-2">
        <SlidingBanner
          id="featured2"
          class="font-display text-green text-xl"
          :length="9"
          :speed="30"
          >FEATURED ON APPLE KEYNOTE</SlidingBanner
        >
      </div>

      <div class="md:py-4 py-2"></div>
      <div class="h-auto">
        <div class="flex md:flex-row flex-col-reverse">
          <div class="flex flex-col md:w-3/4 w-full md:pr-12 pr-0">
            <div class="text-3xl pb-4 font-minimedium font-bold">Overview</div>
            <div
              v-html="$md.render(work.overview)"
              class="page__content markdown text-black font-serif"
            />
          </div>
          <div class="flex flex-col pb-2 md:pb-0">
            <div class="text-3xl md:pb-4 pb-2 font-minimedium font-bold">
              Roles
            </div>
            <div
              class="flex flex-row flex-wrap md:flex-col justify-center font-minimedium"
            >
              <div
                v-for="(role, i) in work.roles"
                :key="i"
                class="px-2 py-2 md:px-0 md:py-0 md:pb-1 text-black"
              >
                {{ role }}
              </div>
            </div>
          </div>
          <div
            class="text-base flex md:hidden justify-center text-center italic py-4 text-black"
          >
            {{ work.description }}
          </div>
        </div>
        <div
          v-if="work.galleryImages != undefined"
          class="flex flex-col md:flex-row mx-auto md:justify-center items-center w-full md:w-2/3 py-4"
        >
          <img
            v-for="(image, i) in work.galleryImages"
            :src="image"
            :key="i"
            class="w-2/3 px-4"
          />
        </div>
      </div>
    </div>

    <div
      markdown="1"
      v-html="$md.render(work.details)"
      class="page__content markdown overflow-hidden px-8 mx-auto font-serif text-base text-black"
    />
  </div>
</template>

<script>
import data from '@iconify/icons-ic/sharp-expand-more'
import { mapGetters, mapActions } from 'vuex'

import SlidingBanner from '~/components/SlidingBanner.vue'

export default {
  components: {
    SlidingBanner,
  },
  head() {
    return {
      title: this.work.title,
    }
  },
  computed: mapGetters({ work: 'getWorkCase' }),
  async fetch({ store }) {
    if (store.state.workCases.length === 0)
      await store.dispatch('fetchWorkCases')
  },
}
</script>

<style>
h1 {
  font-size: 1.875rem;
  padding-bottom: 1rem;
  color: #006838;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
  color: #006838;
  font-weight: 700;
}

iframe {
  margin: auto;
}

img {
  padding: 0.5rem 0.5rem;
  margin: 0 auto;
}

.text-left > h2 {
  text-align: left;
}
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
