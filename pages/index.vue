<template>
  <div class="bg-pink text-green h-screen w-full">
    <div id="whatwedo" class="text-2xl text-center">what we do</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'noshi',
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  layout: 'indexLayout',
}
</script>

<style></style>
