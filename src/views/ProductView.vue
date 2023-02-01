<template>
    <div class="container">
        <ProductList :products="products" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
    components: { ProductList },
    name: 'ProductView',
    data() {
        return {
            products: []
        }
    },
    methods: {
        addToCart(value) {
            this.cart.push(value)
            this.cartTotal += value.price
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter(prod => Number(prod.price) < this.max)
        },
        cartTotal() {
            return this.cart.reduce((inc, item) => Number(item.price) + inc, 0)
        },
        cartBtn() {
            return {
                warningCart: this.cartTotal >= 100,
                successCart: this.cartTotal < 100
            }
        }
    },
    created() {
        fetch('https://hplussport.com/api/products/order/price')
            .then(res => res.json())
            .then(data => {
                this.products = data
            })
    }
}
</script>

<style scoped lang="css">
.warningCart {
    background: red;
}

.successCart {
    background: green;
}

.container {
    font-family: 'Lato', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
</style>
