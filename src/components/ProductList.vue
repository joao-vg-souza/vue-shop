<template>
    <RangeSelector
        @filteredProducts="this.filteredProducts = $event"
        :listLength="this.filteredProducts.length"
        @max="this.max = $event"
    />
    <div class="searchField">
        <input
            v-model="searchInput"
            placeholder="Search for product"
            class="searchInput"
            type="text"
        />
    </div>
    <div class="productList">
        <transition-group name="products" appear>
            <template v-for="(prod, index) in filteredProducts" :key="prod.id">
                <Product :index="index" :product="prod" />
            </template>
        </transition-group>
    </div>
</template>

<script>
import Product from '@/components/Product.vue'
import RangeSelector from './RangeSelector.vue'
export default {
    components: { Product, RangeSelector },
    data() {
        return {
            filteredProducts: this.$store.getters.getProducts,
            searchInput: '',
            max: 1000
        }
    },
    watch: {
        searchInput() {
            this.filteredProducts = this.$store.getters.getProducts.filter(
                p =>
                    p.name
                        .toLowerCase()
                        .includes(this.searchInput.toLowerCase()) &&
                    Number(p.price) <= this.max
            )
        },
        max() {
            this.filteredProducts = this.$store.getters.getProducts.filter(
                p =>
                    p.name
                        .toLowerCase()
                        .includes(this.searchInput.toLowerCase()) &&
                    Number(p.price) <= this.max
            )
        }
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

.searchField {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.searchInput {
    width: 50%;
    height: 25px;
    border: none;
    border-radius: 15px;
    background: rgb(206, 223, 255);
    outline: none;
    text-indent: 2%;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
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
