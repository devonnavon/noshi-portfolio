<template>
  <div>
    <h2>{{ post.title }}</h2>
    <!-- <div>{{post.body}}</div> -->
    <nuxt-content :document="post.body" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
      console.log(post.body)
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