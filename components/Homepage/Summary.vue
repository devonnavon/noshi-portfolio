<template>
  <section id="summary" class="bg-pink relative font-display">
    <div
      id="phrases"
      class="relative text-green md:text-huge text-4xl md:pl-16 px-6"
    >
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
        if ([0, 2].includes(i)) {
          this.splitWords(phrase, tl, i, duration, ['small'])
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
    splitWords(phrase, tl, i, duration, keywords) {
      //we need to split out the first one into seperate words so we can pause
      let words = phrase.split(' ')
      words.forEach((word, j) => {
        //create spans to fill with each word (otherwise it just replaces)
        let line = document.getElementById(`phrase_${i}`)
        let span = document.createElement('span')
        if (keywords.includes(word)) this.createSvgContainer(i, j, span)
        //small
        else span.setAttribute('id', `word${i}_${j}`)
        line.appendChild(span)
        //select each span and fill with word
        tl.to(`#word${i}_${j}`, {
          duration: duration * word.length,
          text: word + ' ',
        })
        if (keywords.includes(word)) {
          let svg = this.svgCrossOutSmall()
          span.prepend(svg)
          this.drawSvgAnimation(`#${word}Path`, 0.5, tl)
        }
      })
    },
    createSvgContainer(i, j, span) {
      let innerSpan = document.createElement('span')
      span.setAttribute('id', `word${i}_${j}_container`)
      span.style.position = 'relative'
      innerSpan.setAttribute('id', `word${i}_${j}`)
      span.appendChild(innerSpan)
    },
    drawSvgAnimation(path, duration, tl) {
      let p = document.querySelector(path)
      let l = p.getTotalLength()
      gsap.set(p, { opacity: 0 })
      tl.set(p, { strokeDasharray: l, opacity: 100 })
      tl.fromTo(p, duration, { strokeDashoffset: l }, { strokeDashoffset: 0 })
    },
    svgCrossOutSmall() {
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
  min-height: 600px;
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
