<template>
  <div
    @click="gotoid('summary')"
    id="homeanchor"
    class="hover:underline text-center h-12 cursor-pointer"
  >
    <slot>scroll to {{ anchor }}</slot>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  props: { anchor: String },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      gsap.set('#homeanchor', { y: '15', opacity: 0 })
      gsap.to('#homeanchor', { delay: 3.5, y: 0, opacity: 100 })
    },
    gotoid(id) {
      smoothscroll.polyfill()
      const element = document.getElementById(id)
      const topPos = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth', // smooth scroll
      })
    },
  },
}
</script>

<style></style>
