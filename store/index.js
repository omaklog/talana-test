export const state = () => ({
  menus: [],
  products: [],
  loading: false,
  currentCategory: null
})


export const getters = {
  menus: (state) => {
    return state.menus
  },

  products: (state) => {
    return state.products
  },

  currentCategory: (state) => {
    return state.currentCategory
  },

}

export const mutations = {

  SET_DOM_LOADING(state) {
    state.loading = !state.loading
  },

  setMenu(state, menus) {
    state.menus = menus;
  },

  setProducts(state, products){
    state.products = products;
  },

  setCurrentCategory(state, currentCategory){
    state.currentCategory = currentCategory;
  }

}

export const actions = {

  getMenu({commit}, state) {
    this.$api.get('/product-category/').then(response => {
      commit('setMenu', response.data)
    }).catch(e => {
      //console.log("error")
    })
  },

  getProducts({commit}, state) {
    this.$api.get('/product/').then(response => {
      commit('setProducts', response.data)
    }).catch(e => {
      //console.log("error")
    })
  }

}
