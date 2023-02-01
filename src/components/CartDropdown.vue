<template>
    <Transition name="dropDown">
        <div class="dropDownCart">
            <template v-for="prod in cart" :key="prod.id">
                <div class="prodCart">
                    <p>{{ prod.name }}</p>
                    <p style="text-align: end">
                        <Currency :price="prod.price" />
                    </p>
                </div>
            </template>
        </div>
    </Transition>
</template>

<script>
import Currency from './Currency.vue'

export default {
    components: { Currency },
    props: ['cart']
}
</script>

<style scoped lang="css">
.prodCart:not(:first-child) {
    border-top: 2px solid rgb(117, 117, 117);
}
.prodCart {
    padding: 5px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
}
.dropDownCart {
    display: grid;
    position: fixed;
    position: fixed;
    right: 20px;
    top: 50px;
    min-width: 25%;
    background: white;
    border: 1px solid rgb(117, 117, 117);
    border-radius: 10px;
}
.dropDown-enter-active,
.dropDown-leave-active {
    transition: all 0.5s ease-in-out;
    transform: auto;
}

.dropDown-enter-from,
.dropDown-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}
</style>
