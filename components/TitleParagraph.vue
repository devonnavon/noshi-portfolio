<template>
  <div>
    <div class="text-2xl font-serif font-bold pb-2">{{ title }}</div>
    <div class="text-xl">
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
