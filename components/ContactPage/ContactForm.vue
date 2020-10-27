<template>
  <!--from  https://tailwindcomponents.com/component/basic-contact-form -->
  <div class="flex justify-center py-40 font-display text-green px-3 md:px-0">
    <div class="form-submitted w-full max-w-lg" v-show="!shown">
      <div
        class="flex flex-col justify-center font-serif text-l border-green border-dashed border-4 w-full text-center h-40"
      >
        <div class="text-center">thank you!</div>
        <div>we'll be in touch shortly...</div>
      </div>
    </div>
    <form
      class="w-full max-w-lg"
      name="contact"
      method="POST"
      netlify
      netlify-honeypot="bot-field"
      v-show="shown"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="grid-name"
          >
            your name:
          </label>
          <input
            class="font-serif text-orange appearance-none block w-full border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            placeholder="Hayao Miyazaki"
            name="name"
          />
          <!-- <p class="text-orange text-xs italic">Please fill out this field.</p> -->
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="email"
          >
            your email:
          </label>
          <input
            class="font-serif text-orange appearance-none block w-full border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            placeholder="hayao@studioghibli.com"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="message"
          >
            helpful info:
          </label>
          <textarea
            class="font-serif text-orange no-resize appearance-none block w-full text-gray-700 border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            type="text"
            name="message"
            placeholder="I'd like to discuss a digital experience for my new film..."
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div>
          <input
            class="bg-green hover:bg-orange text-white hover:text-green font-bold py-2 px-4 rounded"
            type="submit"
            value="get in touch"
          />
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return { shown: true }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact',
          ...this.form,
        }),
        axiosConfig
      )
      this.shown = false
    },
  },
}
</script>

<style scoped>
.form-submitted {
  height: 519px;
}
</style>
