import { createStore } from 'vuex'

export default createStore({
  state: {
    mapEchartData:null
  },
  mutations: {
    getMapEchartData(state, val) {
      state.mapEchartData=val
    }
  },
  actions: {
  },
  modules: {
  }
})