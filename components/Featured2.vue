<template>
  <div
    id="featured2"
    class="border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
  >
    <ul class="topics font-display text-green text-2xl">
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
      <li>FEATURED ON APPLE KEYNOTE</li>
    </ul>
  </div>
</template>

<script>
import SomethingSwitcher from '~/components/SomethingSwitcher'

export default {
  components: {
    SomethingSwitcher,
  },
  mounted() {
    this.contactScroll()
  },
  methods: {
    contactScroll() {
      let topics = document.querySelector('.topics').cloneNode(true)
      document.getElementById('featured2').appendChild(topics)

      gsap.to('.topics', 30, {
        x: -topics.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
    },
  },
}
</script>

<style lang="scss">
#featured2 {
  //   border: solid 2px gray;
  white-space: nowrap;
  overflow: hidden;
}
#featured2 ul {
  display: inline-block;
  padding: 0px;
  margin: 0px;
}
#featured2 li {
  display: inline;
  margin-right: 30px;
}
</style>
