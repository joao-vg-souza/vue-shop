<template>
    <div class="container">
        <ProductList :products="products" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
    components: { ProductList },
    name: 'ProductView',
    props: ['products']
}
</script>

<style scoped lang="css"></style>
