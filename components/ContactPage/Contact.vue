<template>
  <section
    id="whatwedo"
    class="bg-pink mx-6 h-screen flex flex-col justify-center"
  >
    <div
      class="flex flex-col font-serif text-green text-left w-full md:py-0 -mt-40 md:-mt-0"
    >
      <div class="md:text-6xl text-4xl">Let's make your next</div>
      <ServiceSwitcher class="md:text-huge text-5xl font-semibold" />
      <div class="self-end font-bold md:text-5xl text-3xl pt-16">together.</div>
    </div>
    <div class="md:py-12 py-0"></div>
    <div
      class="flex flex-col font-serif text-green text-center md:pt-4 md:w-2/3 w-full mx-auto md:py-0 py-16"
    >
      <div class="md:text-3xl text-xl">Say hello</div>
      <EmailContact class="md:text-huge text-4xl self-center" />
    </div>
  </section>
</template>

<script>
import EmailContact from '~/components/EmailContact'
import ServiceSwitcher from '~/components/ServicesSwitcher'

export default {
  components: {
    EmailContact,
    ServiceSwitcher,
  },
  data() {
    return {
      clickable: false,
    }
  },
}
</script>

<style>
#switcharooo {
  min-height: 144px;
}
</style>
