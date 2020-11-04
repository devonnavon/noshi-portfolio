<template>
  <div>
    <div class="h-32"></div>

    <h1>expertise</h1>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'blog',
    }
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return {
      posts,
    }
  },
}
</script>
