import { createRouter, createWebHashHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
const routes = [
    {
        path: '/',
        name: 'listProducts',
        component: ProductView
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
