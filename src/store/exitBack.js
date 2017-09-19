export default {
  mutations: {
    exit (state, router) {
      window.localStorage.clear()
      router.push('/')
    },
    histroy (state, router) {
      router.go(-1)
    }
  }
}
