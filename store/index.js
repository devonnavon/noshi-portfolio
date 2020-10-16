export const state = () => ({
  autoScrolling: false,
  lastScrollPosition:0,
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
        'graphic design',
        'prototyping',
        'package design',
        'creative direction',
      ],
    },
    {
      key: 'develop',
      details: [
        'web app',
        'mobile app',
        'website',
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

export const actions = {
  updateAutoScrolling({ commit }, isAutoscrolling) { 
    commit('switchAutoScrolling', isAutoscrolling)
  },
  updateLastScrollPosition({ commit }, num) { 
    commit('changeLastScrollPosition', num)
  }
}

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName
  },
  changeLastScrollPosition(state, num) {
    state.lastScrollPosition = num
   },
  switchAutoScrolling(state, isAutoscrolling) { 
    state.autoScrolling = isAutoscrolling
  }
}
