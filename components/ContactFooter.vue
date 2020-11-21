<template>
  <section id="contact" class="bg-pink py-24 px-6">
    <div class="flex flex-col justify-center">
      <div
        class="flex flex-col font-serif text-green text-left w-full md:py-0 md:mt-auto"
      >
        <!-- <div class="flex-shrink h-20"></div> -->
        <div class="md:text-5xl text-3xl">Let's make your next</div>
        <ServiceSwitcher
          class="md:text-6xl text-4xl font-semibold"
          id="contactSwitcher2"
        />
        <div class="self-end font-minimedium md:text-4xl text-3xl pt-16">
          together.
        </div>
      </div>
      <div class="md:py-12 py-0"></div>
    </div>
    <div
      class="flex flex-col font-serif text-green text-center md:pt-4 md:w-2/3 w-full mx-auto md:py-0 py-16"
    >
      <div class="md:text-3xl text-xl">Say hello</div>
      <EmailContact class="md:text-6xl text-5xl self-center py-6" />
    </div>
    <!-- <SlidingBanner
      id="contact"
      class="font-display text-green text-5xl md:mt-48 mt-24"
      :length="9"
      :speed="30"
      path="/contact"
      >contact</SlidingBanner
    > -->
  </section>
</template>

<script>
import SomethingSwitcher from '~/components/SomethingSwitcher'
import ServiceSwitcher from '~/components/ServicesSwitcher'
import SlidingBanner from '~/components/SlidingBanner'
import EmailContact from '~/components/EmailContact'

export default {
  components: {
    SomethingSwitcher,
    SlidingBanner,
    ServiceSwitcher,
    EmailContact,
  },
}
</script>

<style lang="scss"></style>
