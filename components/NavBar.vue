<template>
  <!-- <div class="nav">
    <NuxtLink to="/" class="brand">
      <Logo />
    </NuxtLink>
    <NuxtLink to="/" class="brand">Noshi</NuxtLink>
    <nav>
      <NuxtLink to="/work">work</NuxtLink>&nbsp;
      <NuxtLink to="/about">about</NuxtLink>&nbsp;
      <NuxtLink to="/contact">contact</NuxtLink>&nbsp;
      <NuxtLink to="/blog">blog</NuxtLink>&nbsp;
    </nav>
  </div> -->
  <div class="font-display text-green">
    <nav class="flex items-center justify-between flex-no-wrap">
      <div class="flex items-center text-5xl">
        <!-- <img class="object-contain" src="img/logo.svg" /> -->
        <NuxtLink to="/">noshi</NuxtLink>
      </div>
      <div class="flex items-center justify-end flex-no-wrap sm:hidden">
        <!-- THIS WILL BE RESPONIVE MENU / BUTTON -->
        YO
      </div>

      <div
        class="sm:flex sm:items-center sm:justify-end sm:flex-no-wrap sm:show hidden"
      >
        <div class="flex items-center text-2xl">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/work">work</NuxtLink>
        </div>
        <div class="flex items-center text-2xl">
          <!-- <img class="object-contain" src="img/logo.svg" /> -->
          <NuxtLink to="/about">about</NuxtLink>
        </div>
        <div class="flex items-center text-2xl">
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
