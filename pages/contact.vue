<template>
  <div id="#container" class="xl:container mx-auto h-full bg-pink md:px-6">
    <!-- <div class="py-20"></div> -->
    <Contact />
    <!-- <div class="font-serif text-green md:text-3xl text-xl flex justify-center">
      leave us a message
    </div>
    <ContactForm />-->
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
  components: {
    Contact,
    ContactForm,
  },
}
</script>

<style></style>
