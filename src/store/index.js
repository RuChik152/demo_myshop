import Vue from 'vue'
import Vuex from 'vuex'
import cart from "@/views/Cart";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catalog: [],
    catalog_v2:[],
    cart:[]
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCart: (state) => [...state.cart],
    getCatalog_v2: (state) => [...state.catalog_v2]
  },
  mutations: {
    setCatalog: (state, catalog) => { state.catalog = catalog },
    setCatalog_v2: (state, catalog_v2) => { state.catalog_v2 = catalog_v2 },
    setCart: (state, cart) => { state.cart = cart },
    addToCart: (state, product) => {
      const existProduct = state.cart.find( item => item.id == product.id)
      if(existProduct){
        existProduct.quantity++
      } else {
        state.cart.push( Object.assign({quantity: 1}, product))
      }
    },
    setQuantity: (state, {id, quantity}) => {
      const product = state.cart.find(item => item.id == id);
      product.quantity = quantity;
    },
    removeFromCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id == id);
      state.cart.splice(idx, 1);
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch('/api/v1/catalog')
          .then((response) => response.json())
          .then((data) => { commit('setCatalog', data) });
    },
    loadCatalog_v2({ commit }) {
      return fetch('/api/v2/catalog')
          .then((response) => response.json())
          .then((data) => { commit('setCatalog_v2', data) });
    },
    loadCart({ commit }) {
      return fetch('/api/v1/cart')
          .then((response) => response.json())
          .then((data) => { commit('setCart', data) });
    },
    addToCart({ commit }, product) {
      return fetch('/api/v1/cart/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
          .then(() => {
            commit('addToCart', product);
          })
    },
    setQuantity({ commit }, {id, quantity}) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({quantity: quantity})
      })
          .then(()=> {
            commit('setQuantity', {id, quantity});
          })
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
          .then(() => {
            commit('removeFromCart', id);
          })
    }

  },
  modules: {
  }
})
