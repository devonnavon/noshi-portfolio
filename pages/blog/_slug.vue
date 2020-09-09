<template>
  <div>
    <h2>{{ post.title }}</h2>
    <!-- <div>{{post.body}}</div> -->
    <!-- <div v-html="post.body"></div> -->
    <div v-html="$md.render(post.body)" class="page__content markdown pt-4 md:pt-6 md:pb-24" />
    <!-- <nuxt-content :document="post" /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
}
</script>