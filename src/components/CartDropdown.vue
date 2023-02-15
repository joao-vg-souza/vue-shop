<template>
    <div class="dropDownCart">
        <template
            v-for="(item, index) in this.$store.getters.getCart"
            :key="index"
        >
            <div class="prodCart">
                <div>
                    <p class="qty">
                        {{ item.qty }}
                    </p>
                    <p>{{ item.product.name }}</p>
                </div>
                <p style="text-align: end">
                    <Currency :price="item.qty * Number(item.product.price)" />
                </p>
                <div>
                    <button
                        @click.stop="
                            this.$store.commit('removeFromCart', index)
                        "
                        class="deleteButton"
                        type="button"
                    >
                        <img
                            style="width: 25px; height: auto"
                            :src="
                                require('@/assets/CartDropDownComponent/trashcan.png')
                            "
                            alt="trashcan"
                        />
                    </button>
                </div>
            </div>
        </template>
        <div class="checkoutDiv">
            <router-link
                @click="$emit('hideDropdown', false)"
                class="checkoutBtn"
                to="/checkout"
                >Checkout</router-link
            >
        </div>
    </div>
</template>

<script>
import Currency from './Currency.vue'

export default {
    components: { Currency }
}
</script>

<style scoped lang="css">
.prodCart {
    border-bottom: 2px solid rgb(117, 117, 117);
}

.checkoutBtn {
    padding: 10px 5px;
    margin: 5px 0;
    background: green;
    border-radius: 5px;
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
}

.checkoutBtn:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(0, 192, 0);
    transform: scale(1.05);
}

.checkoutDiv {
    display: flex;
    justify-content: center;
}
.qty {
    background: green;
    color: white;
    padding: 5px 12px;
    border-radius: 5px;
}
.prodCart {
    padding: 5px;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 1.5fr 0.5fr 0.1fr;
    grid-template-rows: 1fr;
}
.prodCart > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.prodCart > div > p {
    margin: 0 5px;
}

.deleteButton {
    padding: 1px 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: red;
    transition: all 0.2s ease-in-out;
    margin: 0 5px;
}

.deleteButton:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(255, 70, 70);
    transform: scale(1.05);
}
.dropDownCart {
    display: grid;
    position: fixed;
    position: fixed;
    right: 20px;
    top: 60px;
    min-width: 25%;
    background: white;
    border: 1px solid rgb(117, 117, 117);
    border-radius: 10px;
    grid-template-columns: 1fr;
    max-height: 400px;
    overflow: auto;
}
</style>
