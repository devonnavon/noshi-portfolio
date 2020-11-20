<template>
  <!--from  https://tailwindcomponents.com/component/basic-contact-form -->
  <div
    class="flex justify-center md:py-40 py-20 font-serif text-green px-3 md:px-0"
  >
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
            class="block tracking-wide text-gray-700 text-sm font-minisemi mb-2"
            for="grid-name"
          >
            Your name:
          </label>
          <input
            class="font-serif text-orange appearance-none block w-full border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-name"
            type="text"
            placeholder="Hayao Miyazaki"
            name="name"
            @input="(ev) => (form.name = ev.target.value)"
          />
          <p class="text-orange text-xs italic" v-show="messages.name">
            {{ messages.name }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-minisemi mb-2"
            for="email"
          >
            Your email:
          </label>
          <input
            class="font-serif text-orange appearance-none block w-full border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            @input="(ev) => (form.email = ev.target.value)"
            placeholder="hayao@studioghibli.com"
          />
          <p class="text-orange text-xs italic" v-show="messages.email">
            {{ messages.email }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-minisemi mb-2"
            for="message"
          >
            Helpful info:
          </label>
          <textarea
            class="font-serif text-orange no-resize appearance-none block w-full text-gray-700 border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            type="text"
            name="message"
            @input="(ev) => (form.message = ev.target.value)"
            placeholder="I'd like to discuss a digital experience for my new film..."
          ></textarea>
          <p class="text-orange text-xs italic" v-show="messages.message">
            {{ messages.message }}
          </p>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <input
          class="bg-green hover:bg-orange text-white hover:text-green font-semimedium font-bold py-2 px-4 rounded self-end"
          type="submit"
          value="Submit"
        />
        <!-- <div class="md:w-2/3"></div> -->
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      shown: true,
      form: {
        name: '',
        email: '',
        message: '',
      },
      messages: {
        name: false,
        email: false,
        message: false,
      },
    }
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
      let valid = this.checkform()
      if (valid) {
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
      }
    },
    checkform() {
      if (this.form.name === '')
        this.messages.name = 'please enter a valid name'
      else this.messages.name = false
      if (this.form.email === '')
        this.messages.email = 'please enter a valid email'
      else this.messages.email = false
      if (this.form.message === '')
        this.messages.message = 'please enter a valid message'
      else this.messages.message = false

      for (const key in this.messages) {
        if (this.messages[key]) return false
      }
      return true
    },
  },
}
</script>

<style scoped>
.form-submitted {
  height: 519px;
}
</style>
