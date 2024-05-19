<template>
    <div class="base">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">STATUS DO PEDIDO</div>
        </header>
        <div class="customerBasicInfo">
            <img class="logo" src="@/assets/images/menu/menu_3.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle boldFont">Para</p>
                <p class="customInfo">Cássio Leão | (75) 988332510</p>
            </div>
        </div>
        <div class="customerBasicInfo">
            <img class="logo" src="@/assets/images/extra/location.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle boldFont">Receber em</p>
                <p class="customInfo">Rua Manoel Belarmino de Macedo, 392</p>
            </div>
        </div>
        <div class="orderDetails margin5">
            <div class="orderDetailsHeader margin5">
                <div class="orderDetailsHeaderTitle ">
                    <img class="icon5vh" src="@/assets/images/extra/bolsa-de-dinheiro (1).png" alt="">
                    <div id="totalPrice" class="boldFont">Total: 325,00</div>
                </div>
                <div class="OverviewOrder">
                    <div class="sideOverview">
                        <p>Forma de pagamento:</p>
                        <p>Montante Recebido:</p>
                        <p>Troco:</p>
                    </div>
                    <div class="sideOverview">
                        <p>Dinheiro</p>
                        <p>R$ 500,00</p>
                        <p>R$ 175,00</p>
                    </div>
                </div>
            </div>
            <hr>
            <div id="overviewDescription">
                <div class="orderDetailsHeaderTitle">
                    <div class="boldFont titleHeader">Resumo dos custos</div>
                </div>
                <div class="itensOrderDetails">
                    <p>Taxa de Entrega</p>
                    <p id="discountCoupon">-R$ 15,00</p>
                </div>

            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: 'OrderView',
    components: {},
    methods: {
        back() {
            this.$router.push('/shopping-bag')
        },
        category() {
            this.$router.push('/category')
        }
    }
}
</script>