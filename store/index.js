export const state = () => ({
  page: 'index',
  servicesList: [
    'web app',
    'website',
    'digital strategy',
    'data pipeline',
    'ecommerce store',
  ],
  servicesDetail: [
    {
      key: 'design',
      details: [
        'ux/ui design',
        'prototyping',
        'graphic design',
        'package design',
        'creative direction',
      ],
    },
    {
      key: 'develop',
      details: [
        'website',
        'application',
        'desktop',
        'mobile',
        'vuejs',
        'nodejs',
        'JAMstack',
      ],
    },
    {
      key: 'etc',
      details: [
        'ux strategy',
        'innovation workshops',
        'business model design',
        'analytics',
        'data science',
        'machine learning',
      ],
    },
  ],
})

export const getters = {
  servicesList: (state) => state.servicesList,
  servicesDetail: (state) => state.servicesDetail,
}

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName
  },
}
