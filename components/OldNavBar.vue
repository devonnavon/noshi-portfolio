<template>
  <div class="font-display text-green text-l bg-transparent">
    <nav id="thenav" class="flex justify-center font-display text-green text-l">
      <div class="flex justify-between border-2 rounded-full">
        <NuxtLink to="/" ref="index">
          <div
            :class="selectedClass('index')"
            class="py-1 px-4 m-1 rounded-full"
          >
            home
          </div>
        </NuxtLink>
        <NuxtLink to="work" ref="work">
          <div
            :class="selectedClass('work')"
            class="py-1 px-4 m-1 rounded-full"
          >
            work
          </div>
        </NuxtLink>
        <NuxtLink to="services" ref="services">
          <div
            :class="selectedClass('services')"
            class="py-1 px-4 m-1 rounded-full"
          >
            services
          </div>
        </NuxtLink>

        <NuxtLink to="contact" ref="contact">
          <div
            :class="selectedClass('contact')"
            class="py-1 px-4 m-1 rounded-full"
          >
            contact
          </div>
        </NuxtLink>
        <div class="nav-selected"></div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    console.log(this.$refs.index.$el.clientWidth)
    let ws = [
      this.$refs.index.$el.clientWidth,
      this.$refs.work.$el.clientWidth,
      this.$refs.services.$el.clientWidth,
      this.$refs.contact.$el.clientWidth,
    ]

    this.navMeta = {
      index: { w: ws[0], x: 0 },
      work: { w: ws[1], x: ws[0] },
      services: { w: ws[2], x: ws[0] + ws[1] },
      contact: { w: ws[3], x: ws[0] + ws[1] + ws[2] },
    }

    gsap.set('.nav-selected', {
      x: this.navMeta[this.page].x,
      width: this.navMeta[this.page].w,
      delay: 0.1,
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  watch: {
    page(currentPage, lastPage) {
      let tl = gsap.timeline()
      console.log(this.$refs)
      //forward
      tl.to('.nav-selected', { width: '200px', delay: 0.5 })
      tl.to('.nav-selected', { x: '100px', width: '100px', delay: 0.1 })
      //backward
      tl.to('.nav-selected', { x: '0px', width: '200px', delay: 0.1 })
      tl.to('.nav-selected', { width: '78px', delay: 0.1 })
    },
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
      navMeta: {},
    }
  },
  methods: {
    ...mapActions(['updateLastScrollPosition']),
    selectedClass(page) {
      if (page === this.page) return
      //'bg-green text-pink rounded-full'
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
<style lang="scss">
.nav-selected {
  position: absolute;
  height: 34px;
  width: 0px;
  background-color: aqua;
  border-radius: 9999px;
  margin: 3px;
  z-index: -1;
}
</style>
