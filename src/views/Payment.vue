<template>
    <div class="container">
        <div class="section1">
            <table class="table">
                <tr class="address">
                    <td>
                        <h1>Shipping Address</h1>
                    </td>
                    <td class="addressInfos">
                        <p>João Victor Geronimo De Souza</p>
                        <p>Rua Duarte Schuttel 427</p>
                        <p>Casa Costa e Silva</p>
                        <p>Joinville, SC 89220310</p>
                    </td>
                    <td class="modifyButtonDiv">
                        <button @click="modifyAddress()" class="modifyBtn">
                            Modify
                        </button>
                    </td>
                </tr>
                <tr class="paymentMethod">
                    <td><h1>Payment method</h1></td>
                </tr>
                <tr class="review">
                    <td><h1>Review items and shipping</h1></td>
                </tr>
            </table>
        </div>
        <div class="modal" v-if="changeAddress">
            <ModifyAddressModal></ModifyAddressModal>
        </div>
    </div>
</template>

<script>
import ModifyAddressModal from '@/components/ModifyAddressModal.vue'
export default {
    components: { ModifyAddressModal },
    data() {
        return { changeAddress: false }
    },
    methods: {
        modifyAddress() {
            this.changeAddress = !this.changeAddress
        }
    }
}
</script>

<style scoped lang="css">
.section1 > * {
    border: 1px solid black;
}
table {
    width: 50%;
    height: 50%;
}

td {
    height: 50px;
    width: 50px;
}

.modifyBtn {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    color: rgb(108, 171, 192);
}

.modifyBtn:hover {
    text-decoration: underline;
}

.modifyButtonDiv {
    text-align: end;
}

.addressInfos > p {
    padding: 3px;
}

.section1 {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
}

.container {
    height: 100vh;
}

p {
    font-size: 13px;
}

h1 {
    font-size: 16px;
    font-weight: 600;
}
</style>
