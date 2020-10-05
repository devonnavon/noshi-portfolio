<template>
  <div>
    <div class="text-4xl">{{ title }}</div>
    <div class="text-2xl">
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
