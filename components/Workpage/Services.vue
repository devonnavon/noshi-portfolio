<template>
  <section class="bg-pink h-auto">
    <div>
      <div
        id="yournext"
        class="bigtext font-serif text-green pl-20 pb-10 transform -rotate-10"
      >
        <div>we can build</div>
        <div>your next..</div>
      </div>
    </div>
    <div id="product" class="bigtext font-serif text-green pr-20 text-right">
      <span id="switcharoo"></span><span>&nbsp;</span>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.animate()
  },
  data() {
    return {
      words: [
        'web app',
        'website',
        'digital strategy',
        'data pipeline',
        'ecommerce store',
      ],
    }
  },
  methods: {
    animate() {
      let cursor = gsap.to('.cursor', {
        opacity: 0,
        ease: 'power2.inOut',
        repeat: -1,
      })
      let masterTl = gsap.timeline({ repeat: -1 })
      this.words.forEach((word) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
        tl.to('#switcharoo', { duration: 1, text: word })
        masterTl.add(tl)
      })
    },
  },
}
</script>

<style>
#yournext {
  float: left;
}
#product {
  clear: left;
}

.bigtext {
  font-size: 7rem;
}
</style>
