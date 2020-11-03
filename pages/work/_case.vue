<template>
  <div
    v-html="$md.render(work.details)"
    class="page__content markdown pt-4 md:pt-6 md:pb-24"
  />
</template>

<script>
export default {
  head() {
    return {
      title: this.work.title,
    }
  },
  async asyncData({ $content, params, error }) {
    let work
    console.warn(params)
    try {
      work = await $content('work', params.case).fetch()
      //   work = await $content(`work/${params.slug}`).fetch()
    } catch (e) {
      error({ message: e })
    }

    return {
      work,
    }
  },
}
</script>

<style></style>
