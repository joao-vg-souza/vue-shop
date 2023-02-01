<template>
    <div class="container">
        <div>
            <h1 style="font-size: 25px; text-align: end" class="header">
                Checkout
            </h1>
        </div>
        <div class="table">
            <table>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sub-total</th>
                </tr>
                <template v-for="item in cart" :key="item.product.id">
                    <tr>
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
    height: 40px;
    text-align: center;
    vertical-align: middle;
}

.container * {
    border: 1px solid black;
}
</style>
