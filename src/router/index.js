import { createRouter, createWebHashHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import Payment from '../views/Payment.vue'
import store from '../store'
const routes = [
    {
        path: '/',
        name: 'listProducts',
        component: ProductView,
        async beforeEnter() {
            store.commit('toggleNavBar', true)
        }
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        async beforeEnter() {
            store.commit('toggleNavBar', false)
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        async beforeEnter() {
            store.commit('toggleNavBar', false)
        }
    },
    {
        path: '/payselect',
        name: 'selectPaymentMethod',
        component: Payment,
        async beforeEnter() {
            store.commit('toggleNavBar', false)
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
