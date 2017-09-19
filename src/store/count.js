export default {
  state: {
    count: 1
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => {
      state.count > 1 ? state.count-- : null
    }
  }
}
