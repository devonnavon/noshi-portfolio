<template>
  <div>
    <div class="w-screen h-screen bg-orange"></div>
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
