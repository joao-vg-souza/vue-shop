<template>
    <div v-for="prod in products" :key="prod.id">{{ prod.name }}</div>
</template>

<script>
export default {
    name: 'ProductView',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Product 1',
                    price: 100,
                    description: 'Description Product 1'
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: 200,
                    description: 'Description Product 2'
                },
                {
                    id: 3,
                    name: 'Product 3',
                    price: 300,
                    description: 'Description Product 3'
                },
                {
                    id: 4,
                    name: 'Product 4',
                    price: 400,
                    description: 'Description Product 4'
                },
                {
                    id: 5,
                    name: 'Product 5',
                    price: 500,
                    description: 'Description Product 5'
                }
            ]
        }
    }
}
</script>

<style></style>
