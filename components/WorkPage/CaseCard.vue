<template>
  <!-- test a change -->
  <div :id="getId('maindiv')" class="rounded-lg relative pb-8 overflow-hidden">
    <transition name="fade">
      <button
        type="button"
        class="text-green text-2xl absolute right-0 top-0 transform hover:rotate-180 transition-transform duration-1000 ease-out self-center outline-none focus:outline-none p-2"
        aria-label="Close modal"
        v-show="active"
        @click="active = false"
      >
        <IconifyIcon :icon="icons.bxX" /></button
    ></transition>

    <div
      class="flex flex-col font-display text-green md:py-8 py-4 px-8 mx-auto"
    >
      <div v-if="work.client == 'NFL + Verizon'" class="pb-2 md:pb-0">
        <SlidingBanner
          id="featured1"
          class="font-display text-green text-2xl"
          :length="9"
          :speed="30"
          >FEATURED ON APPLE KEYNOTE</SlidingBanner
        >
      </div>

      <div
        class="flex-row text-2xl opacity-50 hidden pl-0 pb-0 md:pb-1 md:flex"
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
            class="text-xl md:text-3xl xl:text-6xl leading-none w-3/4 md:w-2/3 pt-1 md:pt-0"
          >
            {{ work.title }}
          </div>
          <div class="text-lg opacity-50 pb-2 md:hidden">{{ work.client }}</div>
          <div
            class="text-base pt-2 md:w-full lg:w-3/4 hidden md:inline-block text-justify pl-1"
          >
            {{ work.description }}
          </div>
        </div>
        <transition name="fade">
          <div
            v-show="!active"
            class="text-3xl md:text-big self-center pl-4 cursor-pointer"
            @click="active = true"
            :id="getId('expandIcon')"
          >
            <IconifyIcon :icon="icons.sharpExpandMore">
              {{ active ? `Shrink` : `Expand` }}</IconifyIcon
            >
          </div>
        </transition>
      </div>
      <div v-if="work.client == 'NFL + Verizon'" class="py-2">
        <SlidingBanner
          id="featured2"
          class="font-display text-green text-2xl"
          :length="9"
          :speed="30"
          >FEATURED ON APPLE KEYNOTE</SlidingBanner
        >
      </div>

      <!-- <transition name="expandText"> -->
      <div class="md:py-4 py-2"></div>
      <TransitionExpand>
        <div v-show="active" class="h-auto">
          <!-- md:mt-12 mt-6 mb-6  -->
          <div class="flex md:flex-row flex-col-reverse">
            <div class="flex flex-col md:w-3/4 w-full pr-12">
              <div class="text-3xl pb-4">Overview</div>
              <div
                v-html="$md.render(work.overview)"
                class="page__content markdown"
              />
            </div>
            <div class="flex flex-col pb-2 md:pb-0">
              <div class="text-3xl md:pb-4 pb-2">Roles</div>
              <div class="flex flex-row flex-wrap md:flex-col justify-center">
                <div
                  v-for="(role, i) in work.roles"
                  :key="i"
                  class="px-2 py-2 md:px-0 md:py-0 md:pb-1"
                >
                  {{ role }}
                </div>
              </div>
            </div>
            <div
              class="text-base flex md:hidden justify-center text-center italic py-4"
            >
              {{ work.description }}
            </div>
            <!-- <div class="flex flex-col md:flex-row">
              <img
                v-for="(image, i) in work.galleryImages"
                :src="image"
                :key="i"
              />

            </div> -->
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
          <div class="mx-auto flex justify-center">
            <NuxtLink
              :to="`work/${work.slug}`"
              v-if="work.details != undefined"
              class="text-center py-12 underline w-full"
              >Read More</NuxtLink
            >
          </div>
        </div>
      </TransitionExpand>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue'

import TransitionExpand from '~/components/TransitionExpand.vue'
import SlidingBanner from '~/components/SlidingBanner.vue'

import sharpExpandMore from '@iconify/icons-ic/sharp-expand-more'
import bxX from '@iconify/icons-bx/bx-x'

export default {
  props: {
    work: Object,
  },
  components: {
    IconifyIcon,
    TransitionExpand,
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
    active(newState) {
      let tl = gsap.getById(this.getId('activeTl')) //get the animation timeline
      tl = tl ? tl : this.getActiveAnimation() //check if tl is defined, if not create it
      // console.warn(tl)
      if (newState) {
        //this means newState = true so case card is active and we play the animation
        tl.play()
      } else {
        tl.reverse(tl.duration()) //reverse fromt the begining
      }
    },
  },
  methods: {
    getId(element) {
      return `${element}-${this.work.slug}`
    },
    getActiveAnimation() {
      let activeTl = gsap.timeline({ id: this.getId('activeTl') }) //create a timeline with activeTl id
      let mainDivId = `#${this.getId('maindiv')}`
      activeTl.fromTo(
        mainDivId,
        {
          backgroundImage: 'linear-gradient(#f7941e 0%, #d8cbcf 0%)',
        },
        {
          backgroundImage: 'linear-gradient(#f7941e 0%, #d8cbcf 90%)',
          duration: 1,
        }
      )
      return activeTl
    },
  },
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}

table {
  margin: 0 auto;
}
/* 
.expandText-enter-active,
.expandText-leave-active {
  transition: height 4s ease-in-out;
  overflow: hidden;
}
.expandText-enter, .expandText-leave-to{
  height: 0;
} */
</style>
