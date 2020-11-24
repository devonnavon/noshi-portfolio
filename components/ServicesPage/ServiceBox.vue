<template>
  <div class="px-6 md:px-0">
    <div class="flex flex-col bg-darkpink rounded p-6">
      <div class="flex flex-col md:pb-10 pb-4">
        <div class="font-minisemi text-lg pb-2 text-green">What we can do</div>
        <div class="font-serif text-base md:w-2/5">
          We provide the means to our clients end. Sometimes the end isn’t known
          yet and we come up with it together.
        </div>
      </div>
      <div class="flex flex-row invisible md:visible md:pb-8 pb-0">
        <div
          class="font-minimedium opacity-50 flex-1 text-base md:flex-initial md:w-2/5"
        >
          Type of Service
        </div>
        <div class="font-minimedium opacity-50 flex-1 text-base md:flex-grow">
          Example
        </div>
      </div>
      <div class="flex flex-col md:space-y-16 space-y-4">
        <div
          class="flex md:flex-row flex-col border-2 border-pink border-solid rounded px-2 py-4 md:border-none md:pt-0 md:pb-4 md:px-0"
          v-for="(service, i) in services"
          :key="i"
        >
          <div
            class="font-minimedium flex-1 text-base md:pb-0 pb-2 md:flex-initial md:w-2/5"
          >
            {{ service.title }}
          </div>
          <div class="font-serif flex-1 text-base md:flex-grow">
            <div class="w-full md:pr-6">
              {{ service.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'eCommerce Store',
          text: `We have experience with Shopify, Wix, SEO, Google Analytics,
              Facebook Analytics, Stripe and other integral parts to any
              eCommerce tech stack. Our goal when building an online shop is to
              make managing inventory and reaching customers simple and
              seamless.`,
        },
        {
          title: 'Innovation',
          text: `Creating innovative experiences can be daunting, whether it's
              reaching new customers or simply utilizing a new technology. We
              build cost-effective prototypes to mitigate uncertainty and
              produce valuable customer insight. This approach allows us deliver
              to a unique product built around the user.`,
        },
        {
          title: 'Digital Transformation',
          text: `We can take a traditional business model to the web with
              customized, user centered solutions. In the wake of the COVID
              pandemic we helped a company transition its entirely in person
              business model in a matter of months. We work diligently to
              address the needs of your customers and reflect those needs in a
              new digital experience.`,
        },
        {
          title: 'Marketing/Landing Page',
          text: `Whether it's a one time event, a new product launch, or a
              corporate landing page—we can bring your vision to life. Designed
              thoughtfully, build efficiently, and cost effective.`,
        },
        {
          title: 'Anything at all',
          text: `We're excited to tackle new challenges and use our expertise to
              help businesses or individuals find a presence in the ever
              evolving digital realm.`,
        },
      ],
    }
  },
}
</script>

<style></style>
