<template>
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
        <CartDropdown v-if="showDropdown" :cart="cart" />
    </div>
</template>

<script>
import Currency from '@/components/Currency'
import CartDropdown from '@/components/CartDropdown.vue'
export default {
    components: { Currency, CartDropdown },
    props: ['cart'],
    computed: {
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
    data() {
        return { showDropdown: false }
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
</style>
