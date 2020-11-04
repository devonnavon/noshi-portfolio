<template>
  <div class="xl:container mx-auto bg-pink md:px-6 pt-24">
    <div
      class="flex flex-col font-display text-green md:py-8 py-4 px-8 mx-auto"
    >
      <div v-if="work.client == 'NFL + Verizon'" class="pb-2 md:pb-0">
        <Featured2 />
      </div>

      <div class="flex-row text-2xl opacity-50 pb-2 hidden md:flex">
        {{ work.client }}
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col w-1/4 md:w-1/3 flex-shrink-0">
          <div class="case-thumbnail">
            <img :src="work.thumbnail" class="w-full h-auto" alt="" />
          </div>
        </div>
        <div class="flex flex-col pl-4 w-2/3 md:w-auto">
          <div
            class="text-xl md:text-3xl xl:text-6xl leading-none w-3/4 md:w-2/3"
          >
            {{ work.title }}
          </div>
          <div class="text-lg opacity-50 pb-2 md:hidden">{{ work.client }}</div>
          <div
            class="text-base pt-2 md:w-full lg:w-3/4 hidden md:inline-block text-justify"
          >
            {{ work.description }}
          </div>
        </div>
      </div>
      <div v-if="work.client == 'NFL + Verizon'" class="py-2"><Featured /></div>

      <div class="md:py-4 py-2"></div>
      <div class="h-auto">
        <div class="flex md:flex-row flex-col-reverse">
          <div class="flex flex-col md:w-3/4 w-full md:pr-12 pr-0">
            <div class="text-3xl pb-4">Overview</div>
            <div
              v-html="$md.render(work.overview)"
              class="page__content markdown"
            />
          </div>
          <div class="flex flex-col pb-2 md:pb-0">
            <div class="text-3xl md:pb-4 pb-2">Roles</div>
            <div class="flex flex-row flex-wrap md:flex-col justify-center">
              <div
                v-for="(role, i) in work.roles"
                :key="i"
                class="px-2 py-2 md:px-0 md:py-0 md:pb-1"
              >
                {{ role }}
              </div>
            </div>
          </div>
          <div
            class="text-base flex md:hidden justify-center text-center italic py-4"
          >
            {{ work.description }}
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row mx-auto md:justify-center items-center w-full md:w-2/3 py-4"
        >
          <img
            v-for="(image, i) in work.galleryImages"
            :src="image"
            :key="i"
            class="w-2/3 px-4"
          />
        </div>
      </div>
    </div>

    <div
      markdown="1"
      v-html="$md.render(work.details)"
      class="page__content markdown overflow-hidden px-8 mx-auto font-display text-base text-green"
    />
  </div>
</template>

<script>
import Featured from '~/components/Featured.vue'
import Featured2 from '~/components/Featured2.vue'

export default {
  components: {
    Featured,
    Featured2,
  },
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

<style>
h1 {
  font-size: 1.875rem;
  padding-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
}

iframe {
  margin: auto;
}

img {
  padding: 0.5rem 0.5rem;
}

.text-left > h2 {
  text-align: left;
}
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
