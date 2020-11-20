<template>
  <div class="font-display text-green text-l">
    <nav
      id="thenav"
      class="flex justify-center font-display text-green z-50 text-l"
    >
      <div class="flex justify-between border-2 rounded-full bg-pink">
        <div :class="selectedClass('index')" class="py-1 px-4 m-1 rounded-full">
          <NuxtLink to="/">home</NuxtLink>
        </div>
        <div :class="selectedClass('work')" class="py-1 px-4 m-1 rounded-full">
          <NuxtLink to="work">work</NuxtLink>
        </div>
        <div
          :class="selectedClass('services')"
          class="py-1 px-4 m-1 rounded-full"
        >
          <NuxtLink to="services">services</NuxtLink>
        </div>
        <div
          :class="selectedClass('contact')"
          class="py-1 px-4 m-1 rounded-full"
        >
          <NuxtLink to="contact">contact</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    ...mapState(['page', 'lastScrollPosition', 'autoScrolling']),
    navTween() {
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
    }
  },
  methods: {
    ...mapActions(['updateLastScrollPosition']),
    selectedClass(page) {
      if (page === this.page) return 'bg-green text-pink rounded-full'
      else return 'hover:bg-green hover:text-pink'
    },
    onScroll() {
      if (window.innerWidth <= 768) {
        //disable on mobile
        if (this.showNavbar) return
        else {
          //if its not showing we show it
          this.showNavbar = true
          this.navTween.reverse()
        }
      }
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (
        Math.abs(currentScrollPosition - this.lastScrollPosition) < 120 ||
        this.autoScrolling
      ) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.updateLastScrollPosition(currentScrollPosition)

      if (!this.showNavbar) {
        this.navTween.play()
      } else {
        this.navTween.reverse()
      }
    },
  },
}
</script>
<style lang="scss"></style>
