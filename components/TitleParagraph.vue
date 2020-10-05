<template>
  <div>
    <div class="text-3xl">{{ title }}</div>
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
