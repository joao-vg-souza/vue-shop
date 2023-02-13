import { createStore } from 'vuex'

export default createStore({
    state: { products: [], cart: [] },
    getters: {
        getProducts(state) {
            return state.products
        },
        getCart(state) {
            return state.cart
        }
    },
    mutations: {
        addToCart(state, product) {
            let whichProduct
            let existing = state.cart.filter((item, index) => {
                if (item.product.id == Number(product.id)) {
                    whichProduct = index
                    return true
                } else {
                    return false
                }
            })

            if (existing.length) state.cart[whichProduct].qty++
            else state.cart.push({ product: product, qty: 1 })
        },
        removeFromCart(state, idProd) {
            if (state.cart[idProd].qty > 1) state.cart[idProd].qty--
            else state.cart.splice(idProd, 1)
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        },
        removeFromCart({ commit }, idProd) {
            commit('removeFromCart', idProd)
        }
    },
    modules: {}
})
