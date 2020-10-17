<template>
  <!--from  https://tailwindcomponents.com/component/basic-contact-form -->
  <div class="flex justify-center py-40 font-display text-green px-3 md:px-0">
    <form
      class="w-full max-w-lg"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6">
          <label
            class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="grid-first-name"
          >
            your name:
          </label>
          <input
            class="font-serif text-orange appearance-none block w-full border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Hayao Miyazaki"
          />
          <!-- <p class="text-orange text-xs italic">Please fill out this field.</p> -->
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="grid-password"
          >
            your email:
          </label>
          <input
            class="font-serif text-orange appearance-none block w-full border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="hayao@studioghibli.com"
          />
          <!-- <p class="text-gray-600 text-xs italic">
            Some tips - as long as needed
          </p> -->
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
            for="grid-password"
          >
            helpful info:
          </label>
          <textarea
            class="font-serif text-orange no-resize appearance-none block w-full text-gray-700 border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            placeholder="I'd like to discuss a digital experience for my new film..."
          ></textarea>
          <!-- <p class="text-gray-600 text-xs italic">
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p> -->
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="bg-green hover:bg-orange text-white hover:text-green font-bold py-2 px-4 rounded"
            type="button"
          >
            get in touch
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
