<template>
  <div id="#container" class="xl:container mx-auto bg-pink md:px-6">
    <Contact />
    <ContactForm />
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
  components: {
    Contact,
    ContactForm,
  },
}
</script>

<style></style>
