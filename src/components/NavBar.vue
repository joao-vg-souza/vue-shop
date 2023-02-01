<template>
    <div class="cart">
        <h1 style="font-size: 17px"><Currency :price="cartTotal" /></h1>
        <button :class="cartBtn" @click="showDropdown = !showDropdown">
            <img
                :src="require('@/assets/ProductView/shoppingCart.png')"
                :alt="cartPNG"
            />
            <span style="font-size: 16px; color: white" v-if="cart.length">
                {{ cartQty }}
            </span>
        </button>
        <transition name="dropDown">
            <CartDropdown
                @hideDropdown="showDropdown = $event"
                v-if="showDropdown && cart.length"
                :cart="cart"
            />
        </transition>
    </div>
</template>

<script>
import Currency from '@/components/Currency'
import CartDropdown from '@/components/CartDropdown.vue'
export default {
    components: { Currency, CartDropdown },
    props: ['cart', 'cartTotal', 'cartQty'],
    computed: {
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
