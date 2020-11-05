<template>
  <div
    :id="getId()"
    class="border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
  >
    <ul class="topics">
      <li v-for="n in length" :key="n">
        <NuxtLink :to="path" v-if="path != undefined" class="hover:text-orange"
          ><slot>Banner Text</slot></NuxtLink
        >
        <slot v-else>Banner Text</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    path: String,
    length: Number,
    speed: Number,
  },
  mounted() {
    this.contactScroll()
  },
  methods: {
    getId() {
      return `${this.id}SlidingBanner`
    },
    contactScroll() {
      let topics = document.querySelector('.topics').cloneNode(true)
      document.getElementById(`${this.id}SlidingBanner`).appendChild(topics)
      gsap.to('.topics', this.speed, {
        x: -topics.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  //   border: solid 2px gray;
  white-space: nowrap;
  overflow: hidden;
}
ul {
  display: inline-block;
  padding: 0px;
  margin: 0px;
}
li {
  display: inline;
  margin-right: 30px;
}
</style>
