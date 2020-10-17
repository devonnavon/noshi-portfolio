<template>
  <section
    class="mx-6 h-full flex flex-col justify-center bg-pink bg-repeat pt-32"
  >
    <div
      class="flex flex-col font-serif text-green text-left w-full md:py-0 md:mt-auto"
    >
      <!-- <div class="flex-shrink h-20"></div> -->
      <div class="md:text-6xl text-4xl">Let's make your next</div>
      <ServiceSwitcher
        class="md:text-huge text-5xl font-semibold"
        id="contactSwitcher"
      />
      <div class="self-end font-bold md:text-5xl text-3xl pt-16">together.</div>
    </div>
    <div class="md:py-12 py-0"></div>
    <div
      class="flex flex-col font-serif text-green text-center md:pt-4 md:w-2/3 w-full mx-auto md:py-0 py-16"
    >
      <div class="md:text-3xl text-xl">Say hello</div>
      <EmailContact class="md:text-huge text-4xl self-center" />
    </div>
    <!-- <div class="flex justify-center text-5xl font-semibold text-green pt-40">
      or
    </div> -->
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
/* @media only screen and (min-width: 640px) {
  #contactSwitcher {
    min-height: 258px;
  }
} */

#contactSwitcher {
  min-height: 144px;
}
@media only screen and (min-width: 768px) {
  #contactSwitcher {
    min-height: 288px;
  }
}
</style>
