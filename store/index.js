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
  workCases: (state) => state.workCases
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
  changeLastScrollPosition(state, num) {
    state.lastScrollPosition = num
  },
  switchAutoScrolling(state, isAutoscrolling) { 
    state.autoScrolling = isAutoscrolling
  },
  setWorkCases: (state, workCases) => (state.workCases = workCases),
}
