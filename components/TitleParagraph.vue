<template>
  <div>
    <div class="text-2xl font-minimedium font-bold pb-2">{{ title }}</div>
    <div class="text-lg font-serif text-black">
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
