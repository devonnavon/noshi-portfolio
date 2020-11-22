<template>
  <div
    class="flex md:space-x-4 space-x-0 space-y-10 md:space-y-0 bg-darkpink md:mt-16 md:mb-12 rounded"
  >
    <div
      v-for="service in servicesDetail"
      :key="service.key"
      class="md:pb-1 pb-10 serviceCompact flex-1 justify-center flex"
    >
      <!-- <div class="md:w-20"> -->

      <div class="inline-flex flex-col justify-center">
        <div
          class="inline-block font-minisemi text-xl text-center md:text-left pb-2"
        >
          {{ service.key }}
        </div>
        <div
          v-for="(detail, i) in service.details"
          :key="i"
          :id="`serviceCompact_${service.key}_${i}`"
          class="font-serif text-base text-center md:text-left text-black"
        >
          {{ detail }}
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['servicesDetail']),
  },
}
</script>

<style>
@media only screen and (min-width: 768px) {
  .serviceCompact {
    width: 30%;
    min-height: 220px;
  }
}
</style>
