<template>
  <div id="#container" class="xl:container mx-auto h-full bg-pink md:px-6">
    <Contact />
    <div class="flex justify-center text-5xl font-semibold text-green py-40">
      or
    </div>
    <div class="font-serif text-green md:text-3xl text-xl flex justify-center">
      leave us a message
    </div>
    <ContactForm />
    <div class="py-12"></div>
  </div>
</template>

<script>
import Contact from '~/components/ContactPage/Contact'
import ContactForm from '~/components/ContactPage/ContactForm'

export default {
  head() {
    return {
      title: 'contact us',
    }
  },
  async fetch({ store }) {
    if (
      store.state.servicesDetail.length === 0 ||
      store.state.servicesList.length === 0
    )
      await store.dispatch('fetchServices')
  },
  components: {
    Contact,
    ContactForm,
  },
}
</script>

<style></style>
