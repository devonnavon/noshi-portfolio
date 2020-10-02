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
      <ServicesSwitcher />
    </div>
    <div class="flex pt-20 px-20">
      <div class="font-display text-2xl text-justify w-2/5 pt-12">
        From digital strategy, interactive design and full-stack development,
        our complete range of expertise makes us key players in implementing
        digital solutions for small to large-scale web projects.
      </div>
      <ServicesCompact class="w-3/5 pl-10" />
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
