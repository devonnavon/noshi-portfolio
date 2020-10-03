<template>
  <section
    id="comingsoon"
    class="bg-pink mx-6 h-screen flex flex-col justify-between"
  >
    <div class="flex flex-col font-serif text-green w-full md:py-0 py-16">
      <div
        id="newsone"
        class="news border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
      >
        <ul class="topics font-display text-green text-5xl">
          <li>UNDER CONSTRUCTION</li>
          <li>UNDER CONSTRUCTION</li>
        </ul>
      </div>

      <div
        id="newstwo"
        class="news border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
      >
        <ul class="topicstwo font-display text-green text-5xl">
          <li>UNDER CONSTRUCTION</li>
          <li>UNDER CONSTRUCTION</li>
        </ul>
      </div>

      <div
        id="newsthree"
        class="news border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
      >
        <ul class="topicsthree font-display text-green text-5xl">
          <li>UNDER CONSTRUCTION</li>
          <li>UNDER CONSTRUCTION</li>
        </ul>
      </div>
    </div>
    <div
      class="flex flex-col font-serif text-green text-center md:pt-4 md:w-2/3 w-full mx-auto md:py-0 py-16"
    >
      <div class="md:text-3xl text-xl">
        Say hello to see our work in the mean time
      </div>
      <div class="md:text-huge text-4xl self-center">(hey@noshi.cx)</div>
      <!-- <div class="self-end font-bold text-4xl">together.</div> -->
    </div>
    <div class="flex flex-col font-serif text-green w-full md:py-0 py-16">
      <div
        id="newsfour"
        class="news border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
      >
        <ul class="topicsfour font-display text-green text-5xl">
          <li>UNDER CONSTRUCTION</li>
          <li>UNDER CONSTRUCTION</li>
        </ul>
      </div>

      <div
        id="newsfive"
        class="news border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
      >
        <ul class="topicsfive font-display text-green text-5xl">
          <li>UNDER CONSTRUCTION</li>
          <li>UNDER CONSTRUCTION</li>
        </ul>
      </div>

      <div
        id="newssix"
        class="news border-solid border-t-2 border-b-2 border-l-0 border-r-0 border-green"
      >
        <ul class="topicssix font-display text-green text-5xl">
          <li>UNDER CONSTRUCTION</li>
          <li>UNDER CONSTRUCTION</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.contactScroll()
    // this.contactScrollTwo()
  },
  data() {
    return {
      clickable: false,
      currentService: null,
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
    contactScroll() {
      let topics = document.querySelector('.topics').cloneNode(true)
      document.getElementById('newsone').appendChild(topics)

      gsap.to('.topics', 30, {
        x: -topics.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })

      let topicstwo = document.querySelector('.topicstwo').cloneNode(true)
      document.getElementById('newstwo').appendChild(topicstwo)

      gsap.to('.topicstwo', 15, {
        x: -topicstwo.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
      let topicsthree = document.querySelector('.topicsthree').cloneNode(true)
      document.getElementById('newsthree').appendChild(topicsthree)

      gsap.to('.topicsthree', 30, {
        x: -topicsthree.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
      let topicsfour = document.querySelector('.topicsfour').cloneNode(true)
      document.getElementById('newsfour').appendChild(topicsfour)

      gsap.to('.topicsfour', 30, {
        x: -topicsfour.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
      let topicsfive = document.querySelector('.topicsfive').cloneNode(true)
      document.getElementById('newsfive').appendChild(topicsfive)

      gsap.to('.topicsfive', 15, {
        x: -topicsfive.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
      let topicssix = document.querySelector('.topicssix').cloneNode(true)
      document.getElementById('newssix').appendChild(topicssix)

      gsap.to('.topicssix', 30, {
        x: -topicssix.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
    },
    contactScrollTwo() {
      let topicstwo = document.querySelector('.topicstwo').cloneNode(true)
      document.getElementById('newstwo').appendChild(topicstwo)

      gsap.to('.topicstwo', 15, {
        x: -topicstwo.offsetWidth,
        repeat: -1,
        ease: Linear.easeNone,
      })
    },
  },
}
</script>

<style lang="scss">
#switcharooo {
  min-height: 144px;
}
.news {
  //   border: solid 2px gray;
  white-space: nowrap;
  overflow: hidden;
}
.news ul {
  display: inline-block;
  padding: 0px;
  margin: 0px;
}
.news li {
  display: inline;
  margin-right: 30px;
}
.news li::before {
  //   content: '● ';
}
</style>
