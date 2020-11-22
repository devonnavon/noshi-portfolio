<template>
  <div>
    <div class="md:text-3xl text-2xl font-minimedium font-bold md:pt-0">
      {{ title }}
    </div>
    <div class="text-lg font-serif text-black pt-2">
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
