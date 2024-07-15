<template>
    <div class="base gap-3 d-flex flex-column">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">MEUS CUPONS</div>
        </header>
        <div class="margin5 gap-3 d-flex flex-column">
            <div class="text-16-600 text-color-3 d-flex flex-row justify-content-between align-items-center">
                CUPONS PARA ATIVAR
            </div>
            <div class="couponList">
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">10%</div>
                        <div class="nameCoupon text-16-600">GLICOSE 10</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Glicose. Até 05/06/2024.
                    </div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">FRETE</div>
                        <div class="nameCoupon text-16-600">TAXAZERO</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">15%</div>
                        <div class="nameCoupon text-16-600">PALHEIRO</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">10%</div>
                        <div class="nameCoupon text-16-600">POD10</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
            </div>
            <!-- <div class="couponList">
                <div class="couponContainer box-item gap-1 cursor-pointer">
                <div class="iconAvailabeCoupons"></div>
                <div class="availableCouponsDescription">
                    <div class="availableCouponTitle"></div>
                    <div class="availabeCouponInfo"></div>
                </div>
                <div class="arrowRight"></div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                <div class="iconAvailabeCoupons"></div>
                <div class="availableCouponsDescription">
                    <div class="availableCouponTitle"></div>
                    <div class="availabeCouponInfo"></div>
                </div>
                <div class="arrowRight"></div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                <div class="iconAvailabeCoupons"></div>
                <div class="availableCouponsDescription">
                    <div class="availableCouponTitle"></div>
                    <div class="availabeCouponInfo"></div>
                </div>
                <div class="arrowRight"></div>
                </div>
            </div> -->
        </div>
        <div class="wrapper"></div>
        <div class="margin5 gap-3 d-flex flex-column">
            <div class="text-16-600 text-color-3 d-flex flex-row justify-content-between align-items-center">
                CUPONS DISPONÍVEIS
            </div>
            <div class="couponList">
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">10%</div>
                        <div class="nameCoupon text-16-600">POD 10</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">FRETE</div>
                        <div class="nameCoupon text-16-600">TAXAZERO</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">15%</div>
                        <div class="nameCoupon text-16-600">NOROLE</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
                <div class="couponContainer box-item gap-1 cursor-pointer">
                    <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                        <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">10%</div>
                        <div class="nameCoupon text-16-600">POD10</div>
                    </div>
                    <div class="descriptionCoupon text-12 text-color-3">
                        Desconto: 10%, Acima de R$40,00. Válido apenas para compras de Pods. Até 05/06/2024.
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper"></div>        
    </div>
</template>

<script>

export default {
    name: 'CouponsView',
    components: {
        
    },
    methods: {
        back() {
            this.$router.push('/profile')
        },
    }
}
</script>
