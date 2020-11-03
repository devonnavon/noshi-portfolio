<template>
  <div
    id="featured"
    class="border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green md:mt-48 mt-24"
  >
    <ul class="topics font-display text-green text-2xl">
      <li>FEAUTRED ON APPLE KEYNOTE</li>
      <li>FEAUTRED ON APPLE KEYNOTE</li>

      <li>FEAUTRED ON APPLE KEYNOTE</li>

      <li>FEAUTRED ON APPLE KEYNOTE</li>
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
    this.gearRotate()
  },
  methods: {
    contactScroll() {
      let topics = document.querySelector('.topics').cloneNode(true)
      document.getElementById('news').appendChild(topics)

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
#featured {
  //   border: solid 2px gray;
  white-space: nowrap;
  overflow: hidden;
}
#featured ul {
  display: inline-block;
  padding: 0px;
  margin: 0px;
}
#featured li {
  display: inline;
  margin-right: 30px;
}
</style>
