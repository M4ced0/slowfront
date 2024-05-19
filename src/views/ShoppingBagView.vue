<template>
    <div class="base">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">SACOLA</div>
        </header>
        <div class="delivery-time">
            <img class="icon5vh" src="@/assets/images/extra/entrega-rapida.png" alt="">
            <p>Sua entrega em até 25m.</p>
        </div>
        <div class="product-list">
            <div class="item-list">
                <div class="image-product">
                    <img class="item-img img-offer" src="@/assets/images/itens/elf_bar_te.png" alt="">
                </div>
                <div class="item-description">
                    <div class="item-title">
                        <div class="item-title-name">
                            <p class="product-title">Elf Bar TE5000</p>
                            <p>preço unitário</p>
                        </div>
                        <div class="price-item">
                            <div class="totalPrice product-title">R$ 240,00</div>
                            <div class="unitPrice">R$ 120,00</div>
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

                <div class="deleteIcon">
                    <img class="item-img" src="@/assets/images/extra/cesto-de-lixo.png" alt="">
                </div>
            </div>
            <div class="item-list">
                <div class="image-product">
                    <img class="item-img img-offer" src="@/assets/images/itens/elf_bar_bc4000.png" alt="">
                </div>
                <div class="item-description">
                    <div class="item-title">
                        <div class="item-title-name">
                            <p class="product-title">Elf Bar TE5000</p>
                            <p>preço unitário</p>
                        </div>
                        <div class="price-item">
                            <div class="totalPrice product-title">R$ 240,00</div>
                            <div class="unitPrice">R$ 120,00</div>
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

                <div class="deleteIcon">
                    <img class="item-img" src="@/assets/images/extra/cesto-de-lixo.png" alt="">
                </div>
            </div>
        </div>
        <div class="addProducts w-100 text-center">
            <p>Adicionar mais produtos</p>
        </div>
        <div class="bill margin5 bg-order">
            <div class="orderSumary">
                <div class="orderSumaryHeader">
                    <div class="headerSumary">
                        <img src="@/assets/images/extra/moedas.png" alt="" class="icon5vh">
                        <div id="totalPrice">Valor Total: 325,00</div>
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
            <div id="couponCode" class="option">
                <p>Código de cupom de desconto: </p>
                <input type="text" class="item-input" placeholder="(Opcional)">
            </div>
        </div>
        <div id="paymentMethod" class="bg-order margin5">
            <div id="paymentMethodHeader" class="orderSumary">
                <img class="icon5vh" src="@/assets/images/extra/carteira.png" alt="">
                <div id="paymentMethodTitle">
                    <p>Forma de pagamento</p>
                    <p class="sub-title">O pagamento é combinado posteriormente</p>
                </div>
            </div>
            <div id='paymentOption' class="option">
                <p>Informe a sua preferencia</p>
                <input type="text" class="item-input" placeholder="(Opcional)">
            </div>
        </div>
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
        <div class="customerObservation margin5">
            <div class="customerObservationHeader">
                <img>
                <p class="customerInfoTitle">Observações: </p>
            </div>
            <input type="text" id='customerObservation' class="item-input" placeholder="(Optional)">
        </div>
        <div class="orderAction margin5">
            <button class="btn btn-all btn-primary " @click="order">Pedir</button>
        </div>
        <div class="footer-info margin5 text-10">
            <p>Venda proibida para menores de 18 anos.<br> Apresente documento com foto na entrega para comprovar a sua
            idade (+18).</p>
        </div>
        
    </div>
</template>
<script>


export default {
    name: 'ShoppingBagView',
    components: {

    },
    methods: {
        order() {
            this.$router.push('/order')
        },
        back() {
            this.$router.push('/home')
        }
    }
}
</script>