<template>
    <div class="base">
        <div class="text-20-600 mg-5 justify-content-center d-flex">MEUS PEDIDOS</div>
        <div>
            <div class="abasSales">
                <div class="abaTitleSales" :class="{ borderAba: isOngoingActive }" @click="toggleOngoing">
                    <div class=" iconAbaTitleSales">
                        <img src="@/assets/images/extra/lista-de-controle.png" alt="Em andamento">
                    </div>
                    <div class="text-14-600">Em andamento</div>
                </div>
                <div class="abaTitleSales" :class="{ borderAba: isHistoryActive }" @click="toggleHistory">
                    <div class="iconAbaTitleSales">
                        <img src="@/assets/images/extra/relogio.png" alt="Histórico">
                    </div>
                    <div class="text-14-600">Histórico</div>
                </div>
            </div>
            <div v-show="isHistoryActive" class="orderHistoyList">
                <div class="orderHistoryItem d-flex">
                    <div class="orderHistoryIcon w-20"> <img src="../assets/images/status/pedido entregue.png" class="w-80">
                    </div>
                    <div class="orderHistoryItemDescription d-flex flex-column w-100">
                        <div class="orderHistoryItemDescriptioninfo d-flex flex-row w-100 justify-content-between">
                            <div class="orderHistoryItemDescriptionStatus text-18-600">Finalizado</div>
                            <div class="orderHistoryItemDescriptionTotal text-14-600">R$ 12,00</div>
                        </div>
                        <div class="orderHistoryItemDescriptionIndex d-flex flex-row justify-content-between">
                            <div class="n-orderHistory text-11 text-color-3">Nº 1293</div>
                            <div class="orderHistoryItemTimestamp text-11 text-color-3">19/06/24 01:17</div>
                        </div>
                    </div>
                </div>
                <div class="orderHistoryItem d-flex">
                    <div class="orderHistoryIcon w-20"> <img src="../assets/images/status/pedido entregue.png" class="w-80">
                    </div>
                    <div class="orderHistoryItemDescription d-flex flex-column w-100">
                        <div class="orderHistoryItemDescriptioninfo d-flex flex-row w-100 justify-content-between">
                            <div class="orderHistoryItemDescriptionStatus text-18-600">Finalizado</div>
                            <div class="orderHistoryItemDescriptionTotal text-14-600">R$ 38,99</div>
                        </div>
                        <div class="orderHistoryItemDescriptionIndex d-flex flex-row justify-content-between">
                            <div class="n-orderHistory text-11 text-color-3">Nº 1293</div>
                            <div class="orderHistoryItemTimestamp text-11 text-color-3">17/06/24 01:17</div>
                        </div>
                    </div>
                </div>
                <div class="orderHistoryItem d-flex">
                    <div class="orderHistoryIcon w-20"> <img src="../assets/images/status/pedido entregue.png" class="w-80">
                    </div>
                    <div class="orderHistoryItemDescription d-flex flex-column w-100">
                        <div class="orderHistoryItemDescriptioninfo d-flex flex-row w-100 justify-content-between">
                            <div class="orderHistoryItemDescriptionStatus text-18-600">Cancelado</div>
                            <div class="orderHistoryItemDescriptionTotal text-14-600">R$ 70,00</div>
                        </div>
                        <div class="orderHistoryItemDescriptionIndex d-flex flex-row justify-content-between">
                            <div class="n-orderHistory text-11 text-color-3">Nº 1293</div>
                            <div class="orderHistoryItemTimestamp text-11 text-color-3">22/07/24 01:17</div>
                        </div>
                    </div>
                </div>
                <div class="orderHistoryItem d-flex">
                    <div class="orderHistoryIcon w-20"> <img src="../assets/images/status/pedido entregue.png" class="w-80">
                    </div>
                    <div class="orderHistoryItemDescription d-flex flex-column w-100">
                        <div class="orderHistoryItemDescriptioninfo d-flex flex-row w-100 justify-content-between">
                            <div class="orderHistoryItemDescriptionStatus text-18-600">Finalizado</div>
                            <div class="orderHistoryItemDescriptionTotal text-14-600">R$ 32,00</div>
                        </div>
                        <div class="orderHistoryItemDescriptionIndex d-flex flex-row justify-content-between">
                            <div class="n-orderHistory text-11 text-color-3">Nº 1293</div>
                            <div class="orderHistoryItemTimestamp text-11 text-color-3">19/06/24 01:17</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'SalesView',
    data() {
        return {
            isOngoingActive: false,
            isHistoryActive: true,
        };
    },
    components: {
        NavBar,
    },
    methods: {
        toggleOngoing() {
            this.isOngoingActive = true;
            this.isHistoryActive = false;
        },
        toggleHistory() {
            this.isHistoryActive = true;
            this.isOngoingActive = false;
        }
    },
}
</script>
