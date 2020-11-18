<template>
  <section
    id="summary"
    class="bg-pink relative font-serif w-full md:w-auto pt-0 md:pt-14 flex flex-col justify-center align-center"
  >
    <div
      class="phrases relative text-green sm:text-5xl sm:px-6 xl:text-huge text-3xl md:pl-16 px-4 md:px-6"
    >
      <div>
        noshi is a <span>small<span class="strike"></span></span> (two person)
      </div>
      <div>los angeles based</div>
      <div>
        <span>design product consulting<span class="strike2"></span></span>
      </div>
      <div>
        <span>"????"<span class="under"></span></span> studio...
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    let tl = gsap.timeline()
    tl.from('.strike', { delay: 0.5, width: 0, duration: 0.3 })
      .from('.strike2', { width: 0, duration: 1 })
      .from('.under', { width: 0, duration: 0.3 })
  },
}
</script>

<style lang="scss">
$h: 4px;

span {
  position: relative;
  .strike {
    content: '';
    position: absolute;
    top: 56%;
    left: -5%;
    width: 110%;
    height: $h;
    background: #f7941e;
  }
  .strike2 {
    content: '';
    position: absolute;
    top: 56%;
    left: -1%;
    width: 102%;
    height: $h;
    background: #f7941e;
  }
  .under {
    content: '';
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 90%;
    height: $h;
    background: #f7941e;
  }
}
</style>
