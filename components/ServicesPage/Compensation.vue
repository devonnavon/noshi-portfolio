<template>
  <div class="bg-pink px-6">
    <div class="md:pb-40 pb-20">
      <div
        class="md:text-6xl text-5xl md:break-normal break-words md:w-5/12 font-minimedium text-green text-justify md:pr-4 md:pb-0 pb-10"
      >
        Types of Compensation
      </div>
      <div class="flex h-full md:justify-end">
        <div class="md:w-7/12 h-auto font-display text-green">
          <svg
            class="w-full"
            width="319"
            height="91"
            viewBox="0 0 319 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.5002 22.75C26.6556 22.75 7.5835 28.6119 7.5835 39.8125L7.5835 54.9792C7.5835 66.1797 26.6556 72.0417 45.5002 72.0417C64.3448 72.0417 83.4168 66.1797 83.4168 54.9792V39.8125C83.4168 28.6119 64.3448 22.75 45.5002 22.75ZM15.1668 54.9792L15.1668 50.4405C17.5683 51.8005 20.1111 52.894 22.7502 53.7014V60.8335C17.7755 58.8846 15.1668 56.5641 15.1668 54.9792ZM60.6668 55.5403V63.0137C57.3795 63.6924 53.5878 64.1891 49.2918 64.3711V56.7878C53.1078 56.6358 56.9086 56.219 60.6668 55.5403ZM41.7085 64.3749C37.8865 64.2285 34.0826 63.7746 30.3335 63.0175L30.3335 55.5441C33.9697 56.2039 37.8107 56.6323 41.7085 56.7954V64.3749ZM68.2502 60.8335V53.7014C70.8898 52.8956 73.4329 51.8021 75.8335 50.4405V54.9792C75.8335 56.5641 73.2286 58.8846 68.2502 60.8335ZM45.5002 49.2917C25.8707 49.2917 15.1668 43.0316 15.1668 39.8125C15.1668 36.5934 25.8707 30.3333 45.5002 30.3333C65.1296 30.3333 75.8335 36.5934 75.8335 39.8125C75.8335 43.0316 65.1296 49.2917 45.5002 49.2917Z"
              fill="#006838"
            />
            <path
              d="M159.5 22.75C140.656 22.75 121.583 28.6119 121.583 39.8125V54.9792C121.583 66.1797 140.656 72.0417 159.5 72.0417C178.345 72.0417 197.417 66.1797 197.417 54.9792V39.8125C197.417 28.6119 178.345 22.75 159.5 22.75ZM129.167 54.9792V50.4405C131.568 51.8005 134.111 52.894 136.75 53.7014V60.8335C131.775 58.8846 129.167 56.5641 129.167 54.9792ZM174.667 55.5403V63.0137C171.379 63.6924 167.588 64.1891 163.292 64.3711V56.7878C167.108 56.6358 170.909 56.219 174.667 55.5403ZM155.708 64.3749C151.887 64.2285 148.083 63.7746 144.333 63.0175V55.5441C147.97 56.2039 151.811 56.6323 155.708 56.7954V64.3749ZM182.25 60.8335V53.7014C184.89 52.8956 187.433 51.8021 189.834 50.4405V54.9792C189.834 56.5641 187.229 58.8846 182.25 60.8335ZM159.5 49.2917C139.871 49.2917 129.167 43.0316 129.167 39.8125C129.167 36.5934 139.871 30.3333 159.5 30.3333C179.13 30.3333 189.834 36.5934 189.834 39.8125C189.834 43.0316 179.13 49.2917 159.5 49.2917Z"
              fill="#006838"
            />
            <path
              d="M273.5 22.75C254.656 22.75 235.583 28.6119 235.583 39.8125V54.9792C235.583 66.1797 254.656 72.0417 273.5 72.0417C292.345 72.0417 311.417 66.1797 311.417 54.9792V39.8125C311.417 28.6119 292.345 22.75 273.5 22.75ZM243.167 54.9792V50.4405C245.568 51.8005 248.111 52.894 250.75 53.7014V60.8335C245.775 58.8846 243.167 56.5641 243.167 54.9792ZM288.667 55.5403V63.0137C285.379 63.6924 281.588 64.1891 277.292 64.3711V56.7878C281.108 56.6358 284.909 56.219 288.667 55.5403ZM269.708 64.3749C265.887 64.2285 262.083 63.7746 258.333 63.0175V55.5441C261.97 56.2039 265.811 56.6323 269.708 56.7954V64.3749ZM296.25 60.8335V53.7014C298.89 52.8956 301.433 51.8021 303.834 50.4405V54.9792C303.834 56.5641 301.229 58.8846 296.25 60.8335ZM273.5 49.2917C253.871 49.2917 243.167 43.0316 243.167 39.8125C243.167 36.5934 253.871 30.3333 273.5 30.3333C293.13 30.3333 303.834 36.5934 303.834 39.8125C303.834 43.0316 293.13 49.2917 273.5 49.2917Z"
              fill="#006838"
            />
          </svg>
        </div>
      </div>
      <!-- <div
        class="grid md:grid-cols-3 grid-cols-1 gap-8 md:pt-20 pt-12 text-green font-display"
      >
        <div v-for="(item, i) in compensationTypes" :key="i">
          <TitleParagraph :title="item.title" :paragraph="item.description" />
        </div>
      </div> -->
      <div
        class="flex flex-col md:flex-row md:space-x-4 space-x-0 space-y-10 md:space-y-0 pt-12"
      >
        <div
          v-for="(item, i) in compensationTypes"
          :key="i"
          class="md:pb-0 pb-10 serviceCompact flex-1 justify-center flex"
        >
          <!-- <div class="md:w-20"> -->

          <div class="inline-flex flex-col">
            <div
              class="inline-block font-minimedium font-bold text-2xl text-left pb-2 text-green"
            >
              {{ item.title }}
            </div>
            <div class="font-serif text-lg text-left">
              {{ item.description }}
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import TitleParagraph from '~/components/TitleParagraph'

export default {
  components: { TitleParagraph },
  data() {
    return {
      compensationTypes: [
        {
          title: 'fee',
          description:
            'Before any significant work begins we agree upon a fixed price and fixed project scope. Some is payed before we start and the rest upon delivery.',
        },
        {
          title: 'performance based',
          description:
            'Usually mixed with a typical project fee, we reduce our normal cost and recieve compensation based on the business impact of our work.',
        },
        {
          title: 'equity',
          description:
            'Typically in an ongoing partnership, we offer a compensation model in which we are paid for our services in shares.',
        },
      ],
    }
  },
}
</script>

<style></style>
