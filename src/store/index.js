import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [],
        cart: [],
        cartTotal: 0,
        cartQty: 0,
        navBarStatus: false
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getCart(state) {
            return state.cart
        },
        getCartTotal(state) {
            let sum = 0
            for (let key = 0; key < state.cart.length; key++) {
                sum = sum + state.cart[key].product.price * state.cart[key].qty
            }
            return sum
        },
        getCartQty(state) {
            let qty = 0
            for (let key = 0; key < state.cart.length; key++) {
                qty = qty + state.cart[key].qty
            }

            return qty
        },
        getNavStatus(state) {
            return state.navBarStatus
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
        },
        toggleNavBar(state, bool) {
            state.navBarStatus = bool
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        },
        removeFromCart({ commit }, idProd) {
            commit('removeFromCart', idProd)
        },
        toggleNavBar({ commit }, bool) {
            commit('toggleNavBar', bool)
        }
    },
    modules: {}
})
