<template>
  <section class="bg-pink h-auto text-green">
    <div>
      <div
        id="yournext"
        class="bigtext font-serif pl-20 pb-10 transform -rotate-10"
      >
        <div>we can build</div>
        <div>your next...</div>
      </div>
    </div>
    <div id="product" class="bigtext font-serif pr-20 text-right">
      <ServicesSwitcher /><span>&nbsp;</span>
    </div>
    <div class="flex">
      <div class="font-display text-m">
        From digital strategy, interactive design and full-stack development,
        our complete range of expertise makes us key players in implementing
        digital solutions for small to large-scale web projects.
      </div>
    </div>
  </section>
</template>

<script>
import ServicesSwitcher from '~/components/ServicesSwitcher'

export default {
  data() {
    return {}
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
