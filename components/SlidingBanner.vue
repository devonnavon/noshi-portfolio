<template>
  <div
    :id="`${this.id}SlidingBanner`"
    class="border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
  >
    <ul :class="`${this.id}topics`">
      <li v-for="n in length" :key="n">
        <NuxtLink
          :to="path"
          v-if="path != undefined && !external"
          class="hover:text-orange"
          ><slot>Banner Text</slot></NuxtLink
        >
        <a
          v-else-if="path != undefined && external"
          :href="path"
          class="hover:text-orange"
          ><slot>Banner Text</slot></a
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
    external: { type: Boolean, default: false },
  },
  mounted() {
    this.contactScroll()
  },
  methods: {
    contactScroll() {
      let topics = document.querySelector(`.${this.id}topics`).cloneNode(true)
      document.getElementById(`${this.id}SlidingBanner`).appendChild(topics)
      gsap.to(`.${this.id}topics`, this.speed, {
        x: -topics.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
    },
  },
}
</script>

<style scoped>
div {
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
