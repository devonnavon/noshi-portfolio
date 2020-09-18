<template>
  <div>
    <div class="bg-pink text-green h-screen w-full">
      <div id="growing" class="w-full h-screen mx-auto flex pl-5 xl:container">
        <Growing class="w-full h-auto self-center" />
      </div>
      <div id="whatwedo" class="text-2xl text-center">what we do</div>
    </div>
  </div>
</template>

<script>
import Growing from '~/components/Growing'

export default {
  components: { Growing },
  head() {
    return {
      title: 'noshi',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  layout: 'indexLayout',
  created() {
    this.$nuxt.$emit('animate-nav')
  },
}
</script>

<style></style>
