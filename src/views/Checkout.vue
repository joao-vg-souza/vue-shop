<template>
    <div class="container">
        <div>
            <h1 class="header">Checkout</h1>
        </div>
        <div class="table">
            <table>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sub-total</th>
                </tr>
                <template
                    v-for="(item, index) in this.$store.getters.getCart"
                    :key="item.product.id"
                >
                    <tr>
                        <td>
                            <button
                                @click="
                                    this.$store.commit(
                                        'addToCart',
                                        item.product
                                    )
                                "
                                class="addBtn"
                            >
                                +</button
                            ><button
                                @click="removeFromCart(index)"
                                class="deleteBtn"
                            >
                                -
                            </button>
                        </td>

                        <td>{{ item.product.name }}</td>
                        <td>{{ item.qty }}</td>

                        <td><Currency :price="item.product.price" /></td>
                        <td>
                            <Currency
                                :price="Number(item.product.price) * item.qty"
                            />
                        </td>
                    </tr>
                </template>
            </table>
            <div style="margin-top: 30px">
                <h1 class="total">
                    Total:
                    <currency :price="this.$store.getters.getCartTotal" />
                </h1>
            </div>
            <div class="finishDiv">
                <router-link class="finishButton" to="/payselect"
                    >Finish order</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import Currency from '@/components/Currency.vue'
export default {
    components: { Currency },
    methods: {
        removeFromCart(index) {
            this.$store.commit('removeFromCart', index)
            if (this.$store.getters.getCartTotal === 0) {
                this.$router.push({ name: 'listProducts' })
            }
        }
    }
}
</script>

<style scoped lang="css">
.container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    height: 100vh;
}

.finishDiv {
    margin-top: 25px;
    text-align: end;
}

.finishButton {
    border: none;
    background: rgb(255, 255, 157);
    border-radius: 10px;
    padding: 8px;
    border: 2px solid rgb(214, 211, 0);
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease-in-out;
    color: black;
}

.finishButton:hover {
    transition: background 0.3s ease-in-out;
    background: rgb(255, 251, 0);
}

.total {
    text-align: end;
    font-size: 20px;
}

.table {
    margin-top: 50px;
}

table {
    width: 100%;
}

td {
    height: 50px;
    text-align: center;
    vertical-align: middle;
    width: 50px;
}

tr:nth-child(2) {
    border-top: 1px solid rgb(112, 112, 112);
}

tr:first-child {
    height: 30px;
}

tr:last-child {
    border-radius: 50px;
}

tr:not(:first-child) {
    background: rgb(224, 224, 224);
}
.addBtn {
    padding: 5px 12px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.deleteBtn {
    padding: 5px 14.5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.addBtn:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(0, 192, 0);
    transform: scale(1.05);
}

.deleteBtn:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
}
.header {
    font-size: 25px;
    text-align: end;
    margin-top: 20px;
}

.addBtn {
    background: green;
    color: white;
}

.deleteBtn {
    color: green;
    background: white;
}
</style>
