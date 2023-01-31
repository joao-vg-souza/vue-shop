<template>
    <div class="container">
        <div class="filterProducts">
            <h1>Valor máximo: R${{ max }}</h1>
            <input
                class="range"
                type="range"
                v-model.number="max"
                min="0"
                max="550"
            />
        </div>
        <div class="productList">
            <template v-for="(prod, index) in products" :key="prod.id">
                <div
                    v-if="prod.units && prod.price <= Number(max)"
                    class="product"
                >
                    <h1>{{ index + 1 }}) {{ prod.name }}</h1>
                    <img :src="prod.imgUrl" :alt="prod.name" />
                    <p>{{ prod.description }}</p>
                    <h2>R${{ Number(prod.price).toFixed(2) }}</h2>
                </div>
            </template>
        </div>
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
                    name: 'Jaqueta Masculina Slim Fit Fashion',
                    price: 319.9,
                    description:
                        'Jaqueta atemporal, tenha em seu guarda roupas uma peça que nunca envelhece; Classica e Elegante; Combina com todos os looks; Design minimalista.',
                    imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSm-zJsw8tg4dK_CeiIOx-UeKIWNu8oIvlNrGB0GD8HalWPWdd5RwxUadtZt4HyK6SPklvr20azXOAZbAudZW8UEyZhPB8p6g&usqp=CAE',
                    units: 12
                },
                {
                    id: 2,
                    name: 'Jordan Air Masculino 1',
                    price: 129.9,
                    description:
                        'O Air Jordan 1 Mid "Metallic Red" é um esquema de cores inspirado no Chicago Bulls do primeiro sapato icônico de Michael Jordan',
                    imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8FE1DuNa5585pJRpbZQIvetsrXL3zkWJ1OAguXS2Gg76IiflNEZq3kyHudT7hT6TNH3t-PfOUAccf_n912wFOolOUX5LccPOBodGZFDkiUBmfgiQeTqrPEg&usqp=CAE',
                    units: 5
                },
                {
                    id: 3,
                    name: 'Calça Jeans Pantalona Wide Leg Baggy',
                    price: 108,
                    description:
                        'Calça Wide leg jeans As Calças Wide leg jeans são especialmente desenvolvidas para mulheres modernas. Fabricadas com tecido jeans 100% algodão premium e maleável',
                    imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfqDXhTyaHqXfAsU2tCszX67LkaD0LzAKg_V6Vc9iXJQNuSgzMl2qEgAoK9J09ByH8NZcIaxovRl6-vRGh55bvs8xnNDtvg4yb02M8kLoiWPTm9Z4yvB7V&usqp=CAE',
                    units: 1
                },
                {
                    id: 4,
                    name: 'Tênis Adidas Ultimashow',
                    price: 239.99,
                    description:
                        'Deixe o barulho de lado. Concentre-se apenas na sua respiração e no movimento durante seu desempenho. Desfrute o momento presente. O resto cai por terra.',
                    imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy5Z4F83Ae8fiNwC5u_eiKamx12QMUq0FAIWhPzN5uBBwqrfrRmx32hiU91C_fE69-BsKB2ndFEBUtyu7ZL7xu85RqTZfnqXFCPNmDalSDXd40HYNruwn5&usqp=CAE',
                    units: 0
                },
                {
                    id: 5,
                    name: 'Jaqueta Drill Chore Coat Black',
                    price: 549.99,
                    description:
                        'O Drill Chore Coat é um casaco sem forro em lona de algodão com gola de veludo, fecho com botão de pressão, bolsos com entrada dupla na parte inferior e uma etiqueta costurada',
                    imgUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9dwxwBIGtmtLw52GYMs6HQi7Jyf_qUHQRH2NEgJFZ5QqZzpxEXvzEgP0uS5sPWA_4XN7-tXEs8eGtGBYJ4BggsrBmhrfM0_6ZQBkoMMI&usqp=CAE',
                    units: 25
                }
            ],
            max: 300
        }
    }
}
</script>

<style scoped lang="css">
.filterProducts {
    text-align: center;
    min-width: 100%;
    margin: 15px 0;
}

.range {
    min-width: 80%;
    cursor: pointer;
}

.container {
    font-family: 'Lato', sans-serif;
}

img {
    min-width: 350px;
    max-width: 20%;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode: color-burn;
    margin: 20px 0;
}

.productList > template {
    display: flex;
    justify-content: center;
    align-content: space-between;
    height: 1fr 1fr;
}

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;500&family=Lato&display=swap');
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100%;
    min-width: 100%;
}

.product > h2 {
    min-width: 50%;
    margin: 10px 0;
    font-size: 20px;
}

.product > h1 {
    font-size: 25px;
    color: rgb(29, 92, 209);
}

.product > p {
    max-width: 30%;
    font-size: 18px;
}
</style>
