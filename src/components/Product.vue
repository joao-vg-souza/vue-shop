<template>
    <div class="product">
        <div class="addToCart">
            <button
                @click="this.$store.commit('addToCart', product)"
                type="button"
            >
                +
            </button>
        </div>
        <div class="productInfos">
            <h1>{{ index + 1 }}) {{ product.name }}</h1>
            <img class="img" :src="product.image" :alt="product.image_title" />
            <p>{{ product.description }}</p>
            <h2 class="productPrice">
                <Currency :price="product.price" />
            </h2>
        </div>
    </div>
</template>

<script>
import Currency from '@/components/Currency'
export default {
    components: { Currency },
    name: 'Product',
    props: ['product', 'index']
}
</script>

<style scoped lang="css">
.addToCart {
    position: absolute;
    left: 25%;
    z-index: 10000000;
}
.img {
    width: 30%;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode: color-burn;
    margin: 20px 0;
    transition: all 0.3s ease-out;
}

.img:hover {
    transition: all 0.3s ease-in;
    transform: scale(1.5) rotateX(360deg);
    margin: 100px 0;
}

.addToCart > button {
    padding: 5px 15px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: green;
    color: white;
    transition: all 0.2s ease-in-out;
    font-size: 18px;
}

.addToCart > button:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(0, 192, 0);
    transform: scale(1.05);
}

.productInfos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100%;
    min-width: 100%;
}

.productPrice {
    min-width: 50%;
    margin: 10px 0;
    font-size: 20px;
}

.productInfos > h1 {
    font-size: 25px;
    color: rgb(29, 92, 209);
}

.productInfos > p {
    max-width: 30%;
    font-size: 18px;
}

.product {
    display: flex;
    align-items: center;
}
</style>
