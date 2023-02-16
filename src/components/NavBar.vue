<template>
    <div class="cart">
        <div style="display: flex; font-size: 17px">
            <transition name="newValue" appear>
                <div
                    :class="newValueStyles"
                    class="newValue"
                    v-if="showNewValue"
                >
                    {{ value > cartTotal ? '-' : '+'
                    }}<Currency
                        :price="
                            value > cartTotal
                                ? value - cartTotal
                                : cartTotal - value
                        "
                    />
                </div>
            </transition>
            <h1>
                <Currency :price="value" />
            </h1>
        </div>
        <button @click="showDropdown = !showDropdown">
            <img
                :src="require('@/assets/ProductView/shoppingCart.png')"
                alt="cartPNG"
            />
            <span
                style="font-size: 16px; color: white"
                v-if="this.$store.getters.getCart.length"
            >
                {{ this.$store.getters.getCartQty }}
            </span>
        </button>
        <transition name="dropDown">
            <CartDropdown
                @hideDropdown="showDropdown = $event"
                v-if="showDropdown && this.$store.getters.getCart.length"
            />
        </transition>
    </div>
</template>

<script>
import Currency from '@/components/Currency.vue'
import CartDropdown from '@/components/CartDropdown.vue'
export default {
    components: { Currency, CartDropdown },
    data() {
        return {
            showDropdown: false,
            value: this.$store.getters.getCartTotal,
            showNewValue: false,
            newValueStyles: { subtractColor: false, plusColor: false }
        }
    },
    computed: {
        cartTotal() {
            return this.$store.getters.getCartTotal
        }
    },
    watch: {
        async cartTotal() {
            setTimeout(() => {
                this.value = this.cartTotal
                this.showNewValue = false
                this.newValueStyles.subtractColor = false
                this.newValueStyles.plusColor = false
            }, 1000)

            this.showNewValue = true
            if (this.value > this.cartTotal) {
                this.newValueStyles.subtractColor = true
            } else {
                this.newValueStyles.plusColor = true
            }
        }
    }
}
</script>

<style scoped lang="css">
.dropDown-enter-active,
.dropDown-leave-active {
    transition: all 0.5s ease-in-out;
    transform: auto;
}

.newValue-enter-active,
.newValue-leave-active {
    transition: all 0.2s ease-in;
    transform: auto;
}

.newValue-enter-from {
    opacity: 0;
    transform: translateX(-10px);
}
.newValue-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

.newValue {
    margin-right: 5px;
    font-size: 17px;
    font-weight: 700;
}

.subtractColor {
    color: red;
}

.plusColor {
    color: green;
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
    background: green;
    transition: all 0.2s ease-in-out;
    margin-left: 5px;
}

.cart > button:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(0, 192, 0);
}
</style>
