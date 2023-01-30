<template>
    <div v-for="prod in products" :key="prod.id">
        <p>{{ prod.name }}</p>
        <img :src="prod.imgUrl" :alt="prod.name" />
    </div>
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
                    description: 'Description Product 1',
                    imgUrl: 'http://s2.glbimg.com/wmFIozz0aQDJKwNyk3XJo8eZvBA=/620x400/e.glbimg.com/og/ed/f/original/2015/12/08/marcas.jpg'
                },
                {
                    id: 2,
                    name: 'Product 2',
                    price: 200,
                    description: 'Description Product 2',
                    imgUrl: 'http://s2.glbimg.com/wmFIozz0aQDJKwNyk3XJo8eZvBA=/620x400/e.glbimg.com/og/ed/f/original/2015/12/08/marcas.jpg'
                },
                {
                    id: 3,
                    name: 'Product 3',
                    price: 300,
                    description: 'Description Product 3',
                    imgUrl: 'http://s2.glbimg.com/wmFIozz0aQDJKwNyk3XJo8eZvBA=/620x400/e.glbimg.com/og/ed/f/original/2015/12/08/marcas.jpg'
                },
                {
                    id: 4,
                    name: 'Product 4',
                    price: 400,
                    description: 'Description Product 4',
                    imgUrl: 'http://s2.glbimg.com/wmFIozz0aQDJKwNyk3XJo8eZvBA=/620x400/e.glbimg.com/og/ed/f/original/2015/12/08/marcas.jpg'
                },
                {
                    id: 5,
                    name: 'Product 5',
                    price: 500,
                    description: 'Description Product 5',
                    imgUrl: 'http://s2.glbimg.com/wmFIozz0aQDJKwNyk3XJo8eZvBA=/620x400/e.glbimg.com/og/ed/f/original/2015/12/08/marcas.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="css">
img {
    max-width: 20%;
}
</style>
