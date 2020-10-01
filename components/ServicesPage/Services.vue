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
      <ServicesSwitcher /><span>&nbsp;</span>
    </div>
    <div class="flex pt-20 pl-20 pr-20">
      <div class="font-display text-2xl text-justify w-2/5 pt-12">
        From digital strategy, interactive design and full-stack development,
        our complete range of expertise makes us key players in implementing
        digital solutions for small to large-scale web projects.
      </div>
      <!-- below should be a component -->
      <div class="flex justify-around w-3/5 pl-10">
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
      <!-- end component -->
    </div>
  </section>
</template>

<script>
import ServicesSwitcher from '~/components/ServicesSwitcher'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['servicesDetail']),
  },
  data() {
    return {}
  },
}
</script>

<style>
#yournext {
  float: left;
}
#product {
  clear: left;
}

.bigtext {
  font-size: 7rem;
}
</style>
