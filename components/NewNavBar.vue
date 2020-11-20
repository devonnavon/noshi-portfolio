<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <div>
    <div class="">
      <nav class="flex space-x-4" aria-label="Tabs">
        <a
          href="#"
          class="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-orange"
        >
          My Account
        </a>
        <a
          href="#"
          class="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-gray-700"
        >
          Company
        </a>
        <a
          href="#"
          class="px-3 py-2 font-medium text-sm rounded-md text-indigo-700 bg-orange"
          aria-current="page"
        >
          Team Members
        </a>
        <a
          href="#"
          class="px-3 py-2 font-medium text-sm rounded-md text-gray-500 hover:text-gray-700"
        >
          Billing
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
