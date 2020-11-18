<template>
  <div class="flex md:justify-around">
    <div
      v-for="service in servicesDetail"
      :key="service.key"
      class="md:pr-4 md:pb-0 pb-10 serviceCompact"
    >
      <!-- <div class="md:w-20"> -->
      <div
        class="font-serif font-bold md:text-3xl text-4xl text-center md:text-left"
      >
        {{ service.key }}
      </div>
      <div>
        <div
          v-for="(detail, i) in service.details"
          :key="i"
          :id="`serviceCompact_${service.key}_${i}`"
          class="font-display md:text-xl text-2xl text-center md:text-left"
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
