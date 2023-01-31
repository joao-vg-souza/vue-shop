<template>
    {{ format(price) }}
</template>

<script>
export default {
    name: 'Currency',
    props: ['price'],
    methods: {
        format(value) {
            return `R$${Number(value).toFixed(2)}`
        }
    }
}
</script>

<style></style>
