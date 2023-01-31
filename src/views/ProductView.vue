<template>
    <div class="container">
        <div class="cart">
            <h1 style="font-size: 17px"><Currency :price="cartTotal" /></h1>
            <button :class="cartBtn" @click="showDropdown = !showDropdown">
                <img
                    :src="require('@/assets/ProductView/shoppingCart.png')"
                    :alt="cartPNG"
                />
                <span style="font-size: 16px; color: white" v-if="cart.length">
                    {{ cart.length }}
                </span>
            </button>
            <Transition name="dropDown">
                <div v-if="showDropdown && cart.length" class="dropDownCart">
                    <template v-for="prod in cart" :key="prod.id">
                        <div class="prodCart">
                            <p>{{ prod.name }}</p>
                            <p style="text-align: end">
                                <Currency :price="prod.price" />
                            </p>
                        </div>
                    </template>
                </div>
            </Transition>
        </div>
        <div class="filterProducts">
            <div>
                <h1 style="font-size: 18px">
                    Valor máximo (<Currency :price="max" />)
                </h1>
                <h1 style="font-size: 16px">
                    Resultados: {{ filteredProducts.length }}
                </h1>
            </div>
            <div>
                <input
                    class="range"
                    type="range"
                    v-model.number="max"
                    min="0"
                    max="130"
                />
            </div>
        </div>
        <div class="productList">
            <transition-group name="products" appear>
                <template
                    v-for="(prod, index) in filteredProducts"
                    :key="prod.id"
                >
                    <div class="product">
                        <div class="addToCart">
                            <button @click="addToCart(prod)" type="button">
                                +
                            </button>
                        </div>
                        <div class="productInfos">
                            <h1>{{ index + 1 }}) {{ prod.name }}</h1>
                            <img :src="prod.image" :alt="prod.image_title" />
                            <p>{{ prod.description }}</p>
                            <h2 class="productPrice">
                                <Currency :price="prod.price" />
                            </h2>
                        </div>
                    </div>
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
import Currency from '@/components/Currency'
export default {
    components: { Currency },
    name: 'ProductView',
    data() {
        return {
            products: [],
            max: 30,
            cart: [],
            showDropdown: false
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

.filterProducts {
    min-width: 100%;
    margin: 15px 0;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 0.5fr;
}

.dropDown-enter-active,
.dropDown-leave-active {
    transition: all 0.5s ease-in-out;
    transform: auto;
}

.dropDown-enter-from,
.dropDown-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.dropDownCart {
    display: grid;
    position: fixed;
    position: fixed;
    right: 20px;
    top: 50px;
    min-width: 25%;
    background: white;
    border: 1px solid rgb(117, 117, 117);
    border-radius: 10px;
}

.prodCart:not(:first-child) {
    border-top: 2px solid rgb(117, 117, 117);
}

.warningCart {
    background: red;
}

.successCart {
    background: green;
}

.prodCart {
    padding: 5px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
}

.cart {
    max-width: 100%;
    max-height: 50px;
    margin: 10px 10px;
    display: flex;
    align-items: center;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10000000;
}

.cart > button {
    padding: 1px 10px;
    height: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 5px;
}

.addToCart {
    position: absolute;
    left: 25%;
    z-index: 10000000;
}

.addToCart > button {
    padding: 5px 15px;
    cursor: grab;
    border: none;
    border-radius: 5px;
    background: green;
    color: white;
    font-size: 18px;
}

.addToCart > button:active {
    cursor: grabbing;
}

.product {
    display: flex;
    align-items: center;
}

.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(29, 92, 209);
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
}

.range::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
}

.range {
    min-width: 100%;
    appearance: none;
    margin-right: 15px;
    height: 7px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#75716f, #75716f);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.container {
    font-family: 'Lato', sans-serif;
}

.productInfos > img {
    min-width: 350px;
    max-width: 20%;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode: color-burn;
    margin: 20px 0;
}

.productList > template {
    display: flex;
    justify-content: center;
    align-content: space-between;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
.productInfos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100%;
    min-width: 100%;
}

.productPrice {
    min-width: 50%;
    margin: 10px 0;
    font-size: 20px;
}

.productInfos > h1 {
    font-size: 25px;
    color: rgb(29, 92, 209);
}

.productInfos > p {
    max-width: 30%;
    font-size: 18px;
}
</style>
