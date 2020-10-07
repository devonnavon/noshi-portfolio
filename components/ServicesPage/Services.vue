<template>
  <section class="bg-pink h-auto text-green px-6">
    <div>
      <div
        id="yournext"
        class="md:text-hugexl text-5xl font-serif md:pl-20 pb-10 transform -rotate-10"
      >
        <div>we can build</div>
        <div>your next...</div>
      </div>
    </div>
    <div
      id="product"
      class="md:text-hugexl text-4xl font-serif md:pr-20 text-right"
    >
      <ServicesSwitcher />
    </div>
    <div class="flex md:flex-row flex-col pt-20 md:pl-20">
      <div
        class="font-display text-2xl text-justify md:w-2/5 pt-12 md:pb-0 pb-16"
      >
        From digital strategy, interactive design and full-stack development,
        our complete range of expertise makes us key players in implementing
        digital solutions for small to large-scale web projects.
      </div>
      <ServicesCompact class="md:w-3/5 md:pl-20 flex-col md:flex-row" />
    </div>
  </section>
</template>

<script>
import ServicesSwitcher from '~/components/ServicesSwitcher'
import ServicesCompact from '~/components/ServicesCompact'

export default {}
</script>

<style>
#yournext {
  float: left;
}
#product {
  clear: left;
}

.bigtext {
  font-size: 8rem;
}
</style>
