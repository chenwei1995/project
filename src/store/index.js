import Vue from 'vue'
import Vuex from 'vuex'
import count from './count'
import column from './column'
import exitBack from './exitBack'
import goods from './goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    count,
    column,
    exitBack,
    goods
  }
})
