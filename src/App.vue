<template>
    <NavBar
        :cart="cart"
        :cartTotal="cartTotal"
        @deleteItem="deleteItem"
        :cartQty="cartQty"
    />
    <router-view
        :products="products"
        :cart="cart"
        @addItem="addItem"
        @deleteItem="deleteItem"
    />
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
    components: { NavBar },
    data() {
        return { cart: [], products: [] }
    },
    methods: {
        addItem(product) {
            let whichProduct
            let existing = this.cart.filter((item, index) => {
                if (item.product.id == Number(product.id)) {
                    whichProduct = index
                    return true
                } else {
                    return false
                }
            })

            if (existing.length) this.cart[whichProduct].qty++
            else this.cart.push({ product: product, qty: 1 })
        },
        deleteItem(idProd) {
            if (this.cart[idProd].qty > 1) this.cart[idProd].qty--
            else this.cart.splice(idProd, 1)
        }
    },
    computed: {
        cartTotal() {
            let sum = 0
            for (let key = 0; key < this.cart.length; key++) {
                sum = sum + this.cart[key].product.price * this.cart[key].qty
            }
            return sum
        },
        cartQty() {
            let qty = 0
            for (let key = 0; key < this.cart.length; key++) {
                qty = qty + this.cart[key].qty
            }

            return qty
        }
    },
    created() {
        fetch('https://hplussport.com/api/products/order/price')
            .then(res => res.json())
            .then(data => {
                this.products = data
            })
    }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Lato', sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>
