<template>
  <div class="flex md:space-x-4 space-x-0 space-y-10 md:space-y-0">
    <div
      v-for="service in servicesDetail"
      :key="service.key"
      class="md:pb-0 pb-10 serviceCompact flex-1 justify-center flex"
    >
      <!-- <div class="md:w-20"> -->

      <div class="inline-flex flex-col">
        <div
          class="inline-block font-minisemi text-xl text-center md:text-left pb-2"
        >
          {{ service.key }}
        </div>
        <div
          v-for="(detail, i) in service.details"
          :key="i"
          :id="`serviceCompact_${service.key}_${i}`"
          class="font-serif text-lg text-center md:text-left"
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
