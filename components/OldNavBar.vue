<template>
  <div class="font-display text-green z-50 text-l">
    <nav id="thenav" class="thenav flex justify-center pt-6">
      <div class="relative border-solid">
        <div
          id="nav-text"
          class="absolute flex text-center items-center justify-around"
        >
          <div :class="selectedClass('index')">
            <NuxtLink to="/">home</NuxtLink>
          </div>
          <div :class="selectedClass('work')">
            <NuxtLink to="work">work</NuxtLink>
          </div>
          <div :class="selectedClass('services')">
            <NuxtLink to="services">services</NuxtLink>
          </div>
          <div :class="selectedClass('contact')">
            <NuxtLink to="contact">contact</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    ...mapState(['page']),
    tween() {
      return gsap.to('#thenav', {
        y: -100,
        ease: 'elastic.in(1, 0.5)',
        duration: 1.4,
      })
    },
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  methods: {
    selectedClass(page) {
      if (page === this.page) return 'bg-green px-2 text-pink rounded-full'
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
      if (!this.showNavbar) {
        this.tween.play()
      } else {
        this.tween.reverse()
      }
    },
  },
}
</script>
<style lang="scss">
// #nav-text {
//   width: 456px;
//   height: 42px;
//   top: 0;
//   bottom: 0;
//   margin-top: auto;
//   margin-bottom: auto;
//   div {
//     width: 75px;
//     // border: 1px black solid;
//   }
// }
</style>
