<template>
  <div
    @click="gotoid('summary')"
    id="homeanchor"
    class="font-display text-l text-green hover:underline text-center h-12 cursor-pointer"
  >
    COME FIND OUT
  </div>
</template>

<script>
export default {
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      gsap.set('#homeanchor', { y: '15', opacity: 0 })
      gsap.to('#homeanchor', { delay: 4, y: 0, opacity: 100 })
    },
    gotoid(id) {
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
