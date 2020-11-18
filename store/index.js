export const state = () => ({
  autoScrolling: false,
  lastScrollPosition:0,
  page: 'index',
  case: undefined,
  servicesList: [],
  servicesDetail: [],
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
  async fetchServices({ commit }) {
    const services = await this.$content('settings/services').fetch()
    const servicesDetail = [
      {
        key: 'design',
        details: services.designServices
      },
      {
        key: 'develop',
        details: services.developServices
      },
      {
        key: 'etc',
        details: services.etcServices
      }
    ]
    const servicesList = services.productServices
    commit('setServicesDetail', servicesDetail);
    commit('setServicesList', servicesList);

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
  setServicesDetail: (state, servicesDetail) => (state.servicesDetail = servicesDetail),
  setServicesList: (state, servicesList) => (state.servicesList = servicesList),
}
