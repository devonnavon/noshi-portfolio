export const state = () => ({
  autoScrolling: false,
  lastScrollPosition:0,
  page: 'index',
  case: undefined,
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
        'ux design',
        'product design',
        'creative direction',
        'graphic design',
        'web design',
        'prototyping',
        'interactive',
        'brand identity'
      ],
    },
    {
      key: 'develop',
      details: [
        'web/mobile app',
        'ecommerce',
        'cms',
        'responsive',
        'full stack',
        'vuejs',
        'nodejs',
        'pwa'
      ],
    },
    {
      key: 'etc',
      details: [
        'ux strategy',
        'innovation workshops',
        'business model design',
        'SEO',
        'analytics',
        'data science',
        'user research',
        'machine learning'
      ],
    },
  ],
  workCases:[]
})

export const getters = {
  servicesList: (state) => state.servicesList,
  servicesDetail: (state) => state.servicesDetail,
  getWorkCases: (state) => state.workCases,
  getWorkCase: (state) => {
    return state.workCases.find(workCase => workCase.slug === state.case)
  }
}

export const actions = {
  updateAutoScrolling({ commit }, isAutoscrolling) { 
    commit('switchAutoScrolling', isAutoscrolling)
  },
  updateLastScrollPosition({ commit }, num) { 
    commit('changeLastScrollPosition', num)
  },
  async fetchWorkCases({ commit }) {
    const cases = await this.$content('work').fetch()
		commit('setWorkCases', cases);
  },
}

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName
  },
  updateCase(state, caseName) {
    state.case = caseName
  },
  changeLastScrollPosition(state, num) {
    state.lastScrollPosition = num
  },
  switchAutoScrolling(state, isAutoscrolling) { 
    state.autoScrolling = isAutoscrolling
  },
  setWorkCases: (state, workCases) => (state.workCases = workCases),
}
