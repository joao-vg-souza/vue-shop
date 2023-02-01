<template>
    <div class="container">
        <h1 class="header">Checkout</h1>
        <table>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Sub-total</th>
            </tr>
            <template v-for="item in cart" :key="item.product.id">
                <tr>
                    <th>{{ item.product.name }}</th>
                    <th>{{ item.qty }}</th>

                    <th><Currency :price="item.product.price" /></th>
                    <th>
                        <Currency
                            :price="Number(item.product.price) * item.qty"
                        />
                    </th>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
import Currency from '@/components/Currency.vue'
export default {
    components: { Currency },
    props: ['cart']
}
</script>

<style></style>
