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
                <template v-for="item in cart" :key="item.product.id">
                    <tr>
                        <td>
                            <button class="addBtn">+</button
                            ><button class="deleteBtn">-</button>
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
        </div>
    </div>
</template>

<script>
import Currency from '@/components/Currency.vue'
export default {
    components: { Currency },
    props: ['cart']
}
</script>

<style scoped lang="css">
.container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    height: 100vh;
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
