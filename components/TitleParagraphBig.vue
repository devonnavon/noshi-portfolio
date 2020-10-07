<template>
  <div>
    <div class="md:text-4xl text-3xl font-serif font-bold md:pt-0">
      {{ title }}
    </div>
    <div class="md:text-2xl text-xl">
      {{ paragraph }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    paragraph: String,
  },
}
</script>

<style></style>
