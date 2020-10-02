<template>
  <div class="font-display text-green z-50">
    <nav
      class="flex items-baseline justify-between flex-no-wrap"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <!-- <img class="object-contain" src="img/logo.svg" /> -->

      <div class="text-5xl">
        <NuxtLink to="/">noshi</NuxtLink>
      </div>
      <div class="flex justify-end flex-no-wrap text-2xl sm:hidden">
        <!-- THIS WILL BE RESPONIVE MENU / BUTTON -->
        YO
      </div>

      <div
        class="sm:flex sm:items-center sm:justify-end sm:flex-no-wrap sm:show hidden"
      >
        <div class="self-end text-2xl pr-5">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/services">services</NuxtLink>
        </div>
        <div class="self-end text-2xl">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/about">about</NuxtLink>
        </div>
        <div class="self-end text-2xl pl-5">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/contact">contact</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo,
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  methods: {
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
    },
  },
}
</script>
<style>
.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
