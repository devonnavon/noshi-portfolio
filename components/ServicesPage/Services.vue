<template>
  <section id="servicesServices" class="bg-pink h-auto text-green px-6 pt-20">
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
      id="productwecanbuild"
      class="md:text-huge text-4xl font-serif md:pr-20 text-right py-12"
    >
      <ServicesSwitcher />
    </div>
    <div class="flex md:flex-row flex-col md:pt-20 pt:10 md:pl-20">
      <div
        class="font-display text-2xl text-justify md:w-2/5 pt-12 md:pb-0 pb-16"
      >
        From ux design to full-stack development, our team excels in providing a
        full range of solutions throughout the digital realm. Whether you're a
        small or large company with a specific plan or no plan at all, we can
        help you execute and scale your next web project.
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
#productwecanbuild {
  clear: left;
}

.bigtext {
  font-size: 8rem;
}
</style>
