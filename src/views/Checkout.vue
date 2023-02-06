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
                <template v-for="(item, index) in cart" :key="item.product.id">
                    <tr>
                        <td>
                            <button
                                @click="$emit('addItem', item.product)"
                                class="addBtn"
                            >
                                +</button
                            ><button
                                @click="$emit('deleteItem', index)"
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
                <h1 class="total">Total: <currency :price="cartTotal" /></h1>
            </div>
        </div>
    </div>
</template>

<script>
import Currency from '@/components/Currency.vue'
export default {
    components: { Currency },
    props: ['cart', 'cartTotal']
}
</script>

<style scoped lang="css">
.container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    height: 100vh;
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
.addBtn,
.deleteBtn {
    padding: 5px 12px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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
