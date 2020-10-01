<template>
  <div class="flex justify-around">
    <div v-for="service in servicesDetail" :key="service.key" class="pr-4">
      <div class="font-serif font-bold text-3xl">{{ service.key }}</div>
      <div>
        <div
          v-for="(detail, i) in service.details"
          :key="i"
          class="font-display text-2xl"
        >
          {{ detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['servicesDetail']),
  },
}
</script>

<style></style>
