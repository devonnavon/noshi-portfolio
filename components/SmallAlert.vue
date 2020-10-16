<template>
  <div class="text-center py-2 px-4 h-auto">
    <div
      class="p-2 bg-orange items-center leading-none rounded-full flex md:w-56 w-48 mx-auto"
      role="alert"
    >
      <span
        class="font-display px-3 text-center flex-auto md:text-base text-sm"
      >
        <slot>alert!</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
