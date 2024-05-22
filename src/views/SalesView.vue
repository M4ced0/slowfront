<template>
    <div class="base">
        <div class="text-20-600 mg-5">Meus Pedidos</div>
        <div class="abasSales">
            <div class="abaTitleSales borderAba">
                <div class="iconAbaTitleSales">
                    <img src="@/assets/images/extra/lista-de-controle.png" alt="Em andamento">
                </div>
                <div class="text-14-600">Em andamento</div>
            </div>
            <div class="abaTitleSales ">
                <div class="iconAbaTitleSales">
                    <img src="@/assets/images/extra/relogio.png" alt="Histórico">
                </div>
                <div class="text-14-600">Histórico</div>
            </div>
        </div>

        <!-- <div class="abasSales d-flex flex-row w-100">
            <div class="abaTitleSales d-flex flex-row justify-content-center">
                <div class="iconAbaTitleSales w-10">
                    <img class="w-100" src="@/assets/images/extra/lista-de-controle.png" alt="">
                </div>
                <div class="">Em andamento</div>
            </div>
            <div class="abaTitleSales d-flex flex-row justify-content-center">
                <div class="iconAbaTitleSales w-10">
                    <img class="w-100 " src="@/assets/images/extra/relogio.png" alt="">
                </div>
                <div class="">Histórico</div>
            </div>
        </div> -->
        <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'


export default {
    name: 'SalesView',
    components: {
        NavBar,
    },
    methods: {
    },
}
</script>