<template>
  <section id="summary" class="bg-pink relative font-display">
    <div id="phrases" class="relative text-green text-huge pl-16">
      <div v-for="(phrase, i) in phrases" :key="i" :id="`phrase_${i}`"></div>
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
      phrases: [
        'noshi is a small (two person)',
        'los angeles based',
        'design product consulting',
        '"????" studio...',
      ],
    }
  },
  methods: {
    animate() {
      gsap.registerPlugin(ScrollTrigger)

      let masterTl = gsap.timeline()

      this.phrases.forEach((phrase, i) => {
        let pauseFlag = false
        let tl = gsap.timeline()
        let duration = 0.1
        if (i == 0) {
          //we need to split out the first one into seperate words so we can pause
          let words = phrase.split(' ')
          words.forEach((word, j) => {
            //create spans to fill with each word (otherwise it just replaces)
            let line = document.getElementById(`phrase_${i}`)
            let span = document.createElement('span')
            if (word === 'small') {
              let innerSpan = document.createElement('span')
              span.setAttribute('id', `smallCrossout`)
              innerSpan.setAttribute('id', `word${i}_${j}`)
              span.appendChild(innerSpan)
            } else span.setAttribute('id', `word${i}_${j}`)
            line.appendChild(span)
            //select each span and fill with word
            tl.to(`#word${i}_${j}`, {
              duration: duration * word.length,
              text: word + ' ',
            })
            if (word === 'small') {
              //here we need to add the crossout animation
              let smallCrossSvg = this.crossOutSmall('full', 'full')
              span.prepend(smallCrossSvg)
              let path = document.querySelector('#smallPath')
              let l = path.getTotalLength()
              gsap.set(path, { opacity: 0 })
              tl.set(path, { strokeDasharray: l, opacity: 100 })
              tl.fromTo(
                path,
                0.5,
                { strokeDashoffset: l },
                { strokeDashoffset: 0 }
              )
            }
          })
        } else {
          tl.to(`#phrase_${i}`, {
            duration: duration * phrase.length,
            text: phrase,
          })
        }
        masterTl.add(tl)
      })
      ScrollTrigger.create({
        animation: masterTl,
        trigger: '#phrases',
        start: 'top center',
      })
    },
    getRelativePosition(elem1, elem2) {},
    crossOutSmall(width, height) {
      const svg = document.createElement('span')
      svg.setAttribute('id', 'crossOutSmall')
      svg.innerHTML = `
        <svg width="240" height="107" viewBox="0 0 162 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="smallPath" d="M2 51C14.5887 46.1148 28.2203 44.1957 41.4444 41.7778C79.2446 34.8662 117.187 28.8573 154.833 21.1111C184.283 15.0514 213.677 8.51624 243 2" stroke="#F7941E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `
      return svg
    },
  },
}
</script>

<style>
#twoPerson {
  position: absolute;
  top: 50px;
  right: 400px;
}
#summary {
  min-height: 500px;
}

#smallCrossout {
  position: relative;
}

#crossOutSmall {
  position: absolute;
  bottom: 0px;
  left: -5px;
}
</style>
