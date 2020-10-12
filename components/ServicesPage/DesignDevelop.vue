<template>
  <div
    class="text-green font-serif bg-pink md:text-hugexl text-5xl text-center md:py-64 py-40 md:font-normal font-bold"
  >
    <div id="ddtoptext">designers</div>
    <div>are your</div>
    <div id="ddbottomtext">developers</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      //get distance between elements
      let top = document.getElementById('ddtoptext').getBoundingClientRect()
      let bottom = document
        .getElementById('ddbottomtext')
        .getBoundingClientRect()
      let diff = bottom.top - top.top
      //define timeline to repeat infinitely with 1 second delay
      let tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyoEase: true,
      })
      //easy and duration will be the same for each animation
      let duration = 3
      let ease = 'elastic.inOut(1.2, 0.3)'
      tl.add('simo')
        .to('#ddtoptext', { y: diff, duration, ease }, 'simo')
        .to('#ddbottomtext', { y: -diff, duration, ease }, 'simo')
    },
  },
}
</script>

<style>
.bigtext {
  font-size: 8rem;
}
</style>
