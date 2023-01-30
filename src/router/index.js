import { createRouter, createWebHashHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'

const routes = [
    {
        path: '/',
        name: 'listProducts',
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
