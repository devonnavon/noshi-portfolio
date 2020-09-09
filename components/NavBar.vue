<template>
  <div class="nav">
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
<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>