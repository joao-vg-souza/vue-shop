<template>
    <div class="filterProducts">
        <div>
            <h1 style="font: 400">Valor máximo (<Currency :price="max" />)</h1>
            <h1 style="font-size: 16px">Resultados: {{ listLength }}</h1>
        </div>
        <div>
            <input
                class="range"
                type="range"
                v-model.number="max"
                :min="0"
                :max="mostExpensive"
            />
        </div>
    </div>
</template>

<script>
import Currency from '@/components/Currency.vue'
export default {
    components: { Currency },
    props: ['listLength'],
    emits: ['max', 'filteredProducts'],
    computed: {
        filteredProducts() {
            return this.$store.getters.getProducts.filter(
                prod => Number(prod.price) <= this.max
            )
        },
        mostExpensive() {
            let mostExpensive = 0
            this.$store.getters.getProducts.filter(p => {
                if (Number(p.price) > mostExpensive) {
                    mostExpensive = Number(p.price)

                    this.max = Number(p.price)
                }
            })
            return mostExpensive
        }
    },
    data() {
        return { max: 0 }
    },
    watch: {
        max() {
            this.$emit('filteredProducts', this.filteredProducts)
            this.$emit('max', this.max)
        }
    },
    beforeUpdate() {
        this.$emit('filteredProducts', this.filteredProducts)
    }

    // beforeUpdate() {
    //     this.$emit('filteredProducts', this.filteredProducts)
    // }
}
</script>

<style scoped lang="css">
.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(29, 92, 209);
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
}

.range::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
}

.range {
    min-width: 100%;
    appearance: none;
    margin-right: 15px;
    height: 7px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    background-image: linear-gradient(#75716f, #75716f);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.filterProducts {
    min-width: 100%;
    margin: 15px 0;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: 0.5fr;
}
</style>
