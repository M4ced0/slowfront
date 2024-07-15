<template>
    <div class="base">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">SACOLA</div>
        </header>
        <div class="delivery-time text-14-600">
            <img class="icon5vh" src="@/assets/images/extra/entrega-rapida.png" alt="">
            <p>Sua entrega em até 25m.</p>
        </div>
        <div class="product-list">
            <div class="item-list">
                <div class="image-product p-0 w-20">
                    <img class="item-img img-offer" src="@/assets/images/itens/elf_bar_te.png" alt="">
                </div>
                <div class="item-description w-40">
                    <div class="item-title">
                        <div class="item-title-name">
                            <p class="text-14-600 text-color-2">Elf Bar TE5000</p>
                            <p class="text-10">preço unitário</p>
                        </div>

                    </div>
                    <div class="amount">
                        <div id="product-minus-button" role="button" aria-label="Aumentar quantidade">
                            <svg viewBox="0 0 24 24" role="presentation" class="css-e0dnmk"
                                style="width: 24px; height: 24px;">
                                <path d="M19,13H5V11H19V13Z" style="fill: rgb(0, 208, 84);"></path>
                            </svg>
                        </div>
                        <div id="product-amount">03</div>
                        <div id="product-plus-button" aria-label="Diminuir quantidade">
                            <svg viewBox="0 0 24 24" role="presentation" class="css-e0dnmk"
                                style="width: 24px; height: 24px;">
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" style="fill: rgb(0, 208, 84);">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="price-item w-20">
                    <div class="text-11-600 text-color-1 linhaUnica">R$ 240,00</div>
                    <div class="text-10 text-color-2">R$ 120,00</div>
                </div>
                <div class="deleteIcon w-10">
                    <img class="item-img" src="@/assets/images/extra/cesto-de-lixo.png" alt="">
                </div>
            </div>
            <div class="item-list mgb1">
                <div class="image-product p-0 w-20">
                    <img class="item-img img-offer" src="@/assets/images/itens/elf_bar_bc4000.png" alt="">
                </div>
                <div class="item-description w-40">
                    <div class="item-title">
                        <div class="item-title-name">
                            <p class="text-14-600 text-color-2">Elf Bar TE5000</p>
                            <p class="text-10">preço unitário</p>
                        </div>

                    </div>
                    <div class="amount">
                        <div id="product-minus-button" role="button" aria-label="Aumentar quantidade">
                            <svg viewBox="0 0 24 24" role="presentation" class="css-e0dnmk"
                                style="width: 24px; height: 24px;">
                                <path d="M19,13H5V11H19V13Z" style="fill: rgb(0, 208, 84);"></path>
                            </svg>
                        </div>
                        <div id="product-amount">03</div>
                        <div id="product-plus-button" aria-label="Diminuir quantidade">
                            <svg viewBox="0 0 24 24" role="presentation" class="css-e0dnmk"
                                style="width: 24px; height: 24px;">
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" style="fill: rgb(0, 208, 84);">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="price-item w-20">
                    <div class="text-11-600 text-color-1 linhaUnica">R$ 240,00</div>
                    <div class="text-10 text-color-2">R$ 120,00</div>
                </div>
                <div class="deleteIcon w-10">
                    <img class="item-img" src="@/assets/images/extra/cesto-de-lixo.png" alt="">
                </div>
            </div>
        </div>
        <div class="addProducts w-100 text-center text-14-600">
            <p>Adicionar mais produtos</p>
        </div>
        <div class="bill margin5 bg-order text-16">
            <div class="orderSumary">
                <div class="orderSumaryHeader">
                    <div class="headerSumary">
                        <img src="@/assets/images/extra/moedas.png" alt="" class="icon5vh">
                        <div id="totalPrice">Valor Total: <b>325,00</b></div>
                    </div>
                </div>
                <div id="orderDetails">
                    <div class="itensOrderDetails">
                        <div class="title-item-order">
                            Taxa de entrega
                        </div>
                        <div class="item-order-value">
                            R$ 10,00
                        </div>
                    </div>
                    <div class="itensOrderDetails discountCoupom">
                        <div class="title-item-order">
                            Cupom de Desconto
                        </div>
                        <div class="item-order-value">
                            -R$ 15,00
                        </div>
                    </div>
                    <div class="itensOrderDetails totalAmountBill">
                        <div class="title-item-order">
                            VALOR TOTAL:
                        </div>
                        <div class="item-order-value">
                            R$ 325,00
                        </div>
                    </div>
                </div>
            </div>
            <div id="couponCode" class="option text-color-2 margin5 text-11-600 ">
                <p>Código de cupom de desconto: </p>
                <button id='button-coupon' class="btn btn-primary btn-small" @click="showCupons">Exibir Todos</button>
            </div>
        </div>
        <div id="paymentMethod" class="bg-order margin5">
            <div id="paymentMethodHeader" class="orderSumary">
                <div class="wrapper"></div>
                <div class="wrapper"></div>
                <div class="wrapper"></div>
                <img class="icon5vh" src="@/assets/images/extra/carteira.png" alt="">
                <div class="wrapper"></div>
                <div id="paymentMethodTitle">
                    <p>Forma de pagamento</p>
                    <p class="sub-title">O pagamento é combinado posteriormente</p>
                </div>
            </div>
            <div id='paymentOption' class="option text-color-2 margin5 text-11-600 ">
                <p>Informe a sua<br> preferencia:</p>
                <input type="text" class="item-input" placeholder="">
            </div>
        </div>
        <div class="customerBasicInfo">
            <img class="logo" src="@/assets/images/menu/menu_3.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle text-14-600">Para</p>
                <p class="customInfo text-14 text-color-3">Cássio Leão | (75) 988332510</p>
            </div>
        </div>
        <div class="customerBasicInfo">
            <img class="logo" src="@/assets/images/extra/location.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle text-14-600">Receber em</p>
                <p class="customInfo text-14 text-color-3">Rua São Bartolomeu, 97- Ao lado blabla Amparo, Santo Antônio
                    de Jesus - BA</p>
            </div>
        </div>
        <div class="customerBasicInfo mgb0">
            <img class="logo" src="@/assets/images/extra/comentario.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle text-14-600">Observações</p>
            </div>
        </div>

        <div class="customerObservation margin5">
            <textarea class="textObs w-100" placeholder="(Optional)"></textarea>
        </div>
        <div class="orderAction margin5">
            <button class="btn btn-all btn-primary " @click="order">Pedir</button>
        </div>
        <div class="footer-info margin5 text-12">
            <p>Venda proibida para menores de 18 anos.<br> Apresente documento com foto na entrega para comprovar a sua
                idade (+18).</p>
        </div>
        <div v-show="isCoupon" class="backgroundTransparent"></div>
        <div v-show="isCoupon" id="couponModal" class="home_box_form border-radius-top">
            
            <div class="text-16-600 text-color-3 d-flex flex-row justify-content-between align-items-center">
                CUPONS DISPONÍVEIS
                <img @click="hideCupons" src="../assets/images/extra/fechar.png">
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
    </div>
</template>
<script>


export default {
    name: 'ShoppingBagView',
    components: {
    },
    data() {
        return {
            isCoupon: false
        }
    },
    methods: {
        order() {
            this.$router.push('/order')
        },
        back() {
            this.$router.push('/home')
        },
        showCupons() {
            this.isCoupon = true
        },
        hideCupons() {
            this.isCoupon = false
        }
    }
}
</script>