<template>
  <div class="font-display text-green z-50 text-l">
    <nav id="thenav" class="thenav flex justify-center pt-6">
      <div class="relative border-solid">
        <div
          id="nav-text"
          class="absolute flex text-center items-center justify-around"
        >
          <div>home</div>
          <div>work</div>
          <div style="width: 70px"></div>
          <div>services</div>
          <div>contact</div>
        </div>
        <svg
          width="456"
          height="68"
          viewBox="0 0 456 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="228" cy="34.5" rx="29" ry="28.5" fill="#FF6B00" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M225.31 18.6981C226.128 18.2043 226.948 17.7098 227.645 17.0401C228.568 17.9237 229.657 18.1088 230.911 18.322L231.11 18.3559C233.858 18.874 234.853 20.8266 235.888 23.2175C237.242 26.3656 240.149 27.601 243.494 27.7205C243.813 27.7205 244.091 27.4017 243.972 27.0829C243.367 25.5227 243.374 23.908 243.381 22.2866V22.2866C243.386 21.1334 243.391 19.9769 243.175 18.8341C242.766 16.7518 241.732 15.1441 240.647 13.4572L240.647 13.4571C240.362 13.0135 240.073 12.5643 239.791 12.0996C238.955 10.7448 238.795 9.50943 238.835 7.91546C238.838 7.82911 238.842 7.74275 238.846 7.65641L238.846 7.65554C238.885 6.70637 238.925 5.75999 238.596 4.84708C237.879 2.97417 236.127 2.65537 234.375 2.37643C234.25 2.35716 234.125 2.34022 234 2.32336L234 2.32336L234 2.32335L234 2.32335L234 2.32335L234 2.32335C233.61 2.27047 233.224 2.21834 232.862 2.09748C232.198 1.90364 231.803 1.55583 231.37 1.17444C231.18 1.00701 230.983 0.833108 230.752 0.662915C230.154 0.224574 229.716 -0.0942194 228.92 0.0253281C227.168 0.344121 224.978 2.49598 224.221 4.01025C223.385 5.60421 223.425 7.35758 224.54 8.79215C224.858 9.19466 225.254 9.54071 225.654 9.8897C226.203 10.3699 226.759 10.8557 227.128 11.5019C227.82 12.6948 228.178 14.928 227.198 16.0847C227.161 16.1052 227.124 16.1315 227.088 16.1643C226.36 16.8929 225.491 17.4258 224.616 17.9617C223.817 18.4517 223.013 18.9443 222.31 19.5914C220.876 20.8665 219.761 22.5801 219.005 24.3334C217.173 28.3582 216.655 32.7814 217.213 37.1648C217.515 39.4725 218.132 41.6994 218.747 43.9222C219.428 46.3822 220.108 48.8371 220.359 51.391C220.637 54.1406 220.797 57.0894 220.239 59.7992C219.913 61.38 219.366 62.8976 218.817 64.4216C218.494 65.3179 218.17 66.2165 217.89 67.1314C217.73 67.6893 218.527 68.0081 218.806 67.5299C218.828 67.4844 218.848 67.4417 218.866 67.4006L218.885 67.4104C219.169 66.4761 219.501 65.5558 219.832 64.6378L219.832 64.6377C220.293 63.363 220.751 62.0927 221.075 60.7954C221.633 58.5639 221.673 56.2924 221.553 54.021C221.376 50.5363 220.565 47.336 219.735 44.0634C219.445 42.9201 219.153 41.768 218.885 40.5919C217.77 35.81 217.651 30.9085 219.323 26.2462C220.12 24.0545 221.314 21.9026 223.026 20.3086C223.709 19.6637 224.509 19.1813 225.31 18.6981Z"
            fill="#006838"
          />
          <path
            d="M435 55.5H252.345C257.983 50.2195 261.5 42.764 261.5 34.5C261.5 26.7451 258.403 19.7018 253.362 14.5H435C446.322 14.5 455.5 23.6781 455.5 35C455.5 46.3219 446.322 55.5 435 55.5ZM194.5 34.5C194.5 42.764 198.017 50.2195 203.655 55.5H21C9.67815 55.5 0.5 46.3219 0.5 35C0.5 23.6781 9.67815 14.5 21 14.5H202.638C197.597 19.7018 194.5 26.7451 194.5 34.5Z"
            stroke="#006838"
          />
        </svg>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    console.log(this.page)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    ...mapState(['page']),
    tween() {
      return gsap.to('#thenav', {
        y: -100,
        ease: 'elastic.in(1, 0.5)',
        duration: 1.4,
      })
    },
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      selectedClass: 'bg-green px-2 text-pink rounded-full',
    }
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition

      if (!this.showNavbar) {
        console.log('play')
        this.tween.play()
      } else {
        console.log('reverse')
        this.tween.reverse()
      }
    },
  },
}
</script>
<style lang="scss">
#nav-text {
  width: 456px;
  height: 42px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  div {
    width: 66px;
    // border: 1px black solid;
  }
}
</style>
