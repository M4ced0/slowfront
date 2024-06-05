<template>
    <div class="base">
        <div class="text-20-600 mg-5">Meus Pedidos</div>
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
    <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'SalesView',
    data() {
        return {
            isOngoingActive: true,
            isHistoryActive: false,
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
