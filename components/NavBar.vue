<template>
  <div class="font-display text-green z-50 xl:container px-6 sm:px-12">
    <nav class="flex items-baseline justify-between flex-no-wrap">
      <!-- <img class="object-contain" src="img/logo.svg" /> -->

      <div class="text-5xl">
        <NuxtLink to="/">noshi</NuxtLink>
      </div>
      <div class="flex justify-end flex-no-wrap text-2xl sm:hidden">
        <!-- THIS WILL BE RESPONIVE MENU / BUTTON -->
        YO
      </div>

      <div
        class="sm:flex sm:items-center sm:justify-end sm:flex-no-wrap sm:show hidden"
      >
        <div class="self-end text-2xl pr-5">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/work">work</NuxtLink>
        </div>
        <div class="self-end text-2xl">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/about">about</NuxtLink>
        </div>
        <div class="self-end text-2xl pl-5">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/contact">contact</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo,
  },
}
</script>
