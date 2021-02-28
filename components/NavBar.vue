<template>
  <div class="font-display text-green text-l bg-transparent">
    <nav id="thenav" class="flex justify-center font-display text-green text-l">
      <div class="flex justify-between border-2 rounded-full">
        <NuxtLink to="/" id="indexNav">
          <div
            :class="selectedClass('index')"
            class="py-1 px-4 m-1 rounded-full"
          >
            home
          </div>
        </NuxtLink>
        <NuxtLink to="/work" id="workNav">
          <div
            :class="selectedClass('work')"
            class="py-1 px-4 m-1 rounded-full"
          >
            work
          </div>
        </NuxtLink>
        <NuxtLink to="/services" id="servicesNav">
          <div
            :class="selectedClass('services')"
            class="py-1 px-4 m-1 rounded-full"
          >
            services
          </div>
        </NuxtLink>

        <NuxtLink to="/contact" id="contactNav">
          <div
            :class="selectedClass('contact')"
            class="py-1 px-4 m-1 rounded-full"
          >
            contact
          </div>
        </NuxtLink>
        <div class="nav-selected"></div>
        <div class="nav-background"></div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    let ws = [
      document.getElementById('indexNav').getBoundingClientRect().width,
      document.getElementById('workNav').getBoundingClientRect().width,
      document.getElementById('servicesNav').getBoundingClientRect().width,
      document.getElementById('contactNav').getBoundingClientRect().width,
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
    })
    gsap.set(`#${this.page}Nav`, { color: '#d8cbcf' })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  watch: {
    page(currentPage, lastPage) {
      let last
      if (currentPage === 'work-case') {
        return
      }
      if (lastPage === 'work-case') {
        lastPage = 'work'
        if (currentPage === 'work') {
          return
        }
      }
      last = this.navMeta[lastPage]
      let curr = this.navMeta[currentPage]

      let tl = gsap.timeline()
      if (curr.x > last.x) {
        tl.add('expand')
          .to(
            '.nav-selected',
            {
              width: curr.w + curr.x - last.x,
              delay: 0.1,
            },
            'expand'
          )
          .set(`#${currentPage}Nav`, { color: '#d8cbcf', delay: 0.2 }, 'expand')
          .add('shrink')
          .to(
            '.nav-selected',
            { x: curr.x, width: curr.w, delay: 0.1 },
            'shrink'
          )
          .set(`#${lastPage}Nav`, { color: '#006838' }, 'shrink')
      } else {
        tl.add('expand')
          .to(
            '.nav-selected',
            {
              x: curr.x,
              width: last.x + last.w - curr.x,
              delay: 0.1,
            },
            'expand'
          )
          .set(`#${currentPage}Nav`, { color: '#d8cbcf', delay: 0.2 }, 'expand')
          .add('shrink')
          .to('.nav-selected', { width: curr.w, delay: 0.1 }, 'shrink')
          .set(`#${lastPage}Nav`, { color: '#006838' }, 'shrink')
      }
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
      else return 'hover:bg-darkpink' // hover:text-pink'
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
#thenav {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.nav-selected {
  position: absolute;
  height: 40px;
  width: 0;
  background-color: #006838;
  border-width: 3px;
  border-color: #d8cbcf;
  border-radius: 9999px;
  z-index: -1;
}
.nav-background {
  position: absolute;
  height: 40px;
  width: 347px;
  background-color: #d8cbcf;
  border-radius: 9999px;
  z-index: -2;
}
</style>
