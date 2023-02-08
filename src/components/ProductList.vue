<template>
    <RangeSelector
        @filteredProducts="this.filteredProducts = $event"
        :products="products"
    />
    <div class="productList">
        <transition-group name="products" appear>
            <template v-for="(prod, index) in filteredProducts" :key="prod.id">
                <Product
                    :index="index"
                    :product="prod"
                    @add-to-cart="addToCart"
                />
            </template>
        </transition-group>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
import RangeSelector from './RangeSelector.vue'
export default {
    components: { Product, RangeSelector },
    props: ['products'],
    data() {
        return {
            filteredProducts: []
        }
    },
    created() {
        this.filteredProducts = this.products
    }
}
</script>

<style scoped lang="css">
.productList > template {
    display: flex;
    justify-content: center;
    align-content: space-between;
}
.products-enter-active,
.products-leave-active {
    transition: all 0.5s ease-in-out;
}

.products-enter-from {
    opacity: 0;
    transform: translateX(-300px);
}

.products-leave-from {
    opacity: 0;
    transform: translateX(300px);
}
</style>
