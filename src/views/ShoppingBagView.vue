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
            <div class="item-list" v-for="item in cartItems" :key="item.id">
                <div class="image-product p-0 w-20">
                    <img class="item-img img-offer" :src="storage + '/' + item.img" alt="Product Image">
                </div>
                <div class="item-description w-40">
                    <div class="item-title">
                        <div class="item-title-name">
                            <p class="text-14-600 text-color-2">{{ item.name }}</p>
                            <p class="text-10">preço unitário</p>
                        </div>

                    </div>
                    <div class="amount">
                        <div id="product-minus-button cursor-pointer" role="button" @click="decreaseAmount(item.id)"
                            aria-label="Aumentar quantidade">
                            <svg viewBox="0 0 24 24" role="presentation" class="css-e0dnmk"
                                style="width: 24px; height: 24px;">
                                <path d="M19,13H5V11H19V13Z" style="fill: rgb(0, 208, 84);"></path>
                            </svg>
                        </div>
                        <div id="product-amount">{{ item.quantity }}</div>
                        <div id="product-plus-button" @click="increaseAmount(item.id)" aria-label="Diminuir quantidade">
                            <svg viewBox="0 0 24 24" role="presentation" class="css-e0dnmk"
                                style="width: 24px; height: 24px;">
                                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" style="fill: rgb(0, 208, 84);">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="price-item w-20">
                    <div class="text-11-600 text-color-1 linhaUnica">{{ amountConverted(item.price * item.quantity) }}
                    </div>
                    <div class="text-10 text-color-2">{{ item.price }}</div>
                </div>
                <div class="deleteIcon w-10" @click="deleteItem(item.id)">
                    <img class="item-img" src="@/assets/images/extra/cesto-de-lixo.png" alt="">
                </div>
            </div>
        </div>
        <div @click="back" class="addProducts w-100 text-center text-14-600">
            <p>Adicionar mais produtos</p>
        </div>
        <div class="bill margin5 bg-order text-16">
            <div class="orderSumary">
                <div class="orderSumaryHeader">
                    <div class="headerSumary">
                        <img src="@/assets/images/extra/moedas.png" alt="" class="icon5vh">
                        <div id="totalPrice">Valor Total: <b>{{ amountConverted(totalWithDiscount) }}</b></div>
                    </div>
                </div>
                <div id="orderDetails">
                    <div class="itensOrderDetails">
                        <div class="title-item-order">
                            Taxa de entrega
                        </div>
                        <div class="item-order-value">
                            {{ amountConverted(deliveryFee) }}
                        </div>
                    </div>
                    <div class="itensOrderDetails discountCoupom">
                        <div class="title-item-order">
                            Cupom de Desconto
                        </div>
                        <div class="item-order-value">
                            - {{ amountConverted(selectedVoucher ? Number(selectedVoucher.discount) : 0.00) }}
                        </div>
                    </div>
                    <div class="itensOrderDetails totalAmountBill">
                        <div class="title-item-order">
                            VALOR TOTAL:
                        </div>
                        <div class="item-order-value">
                            {{ amountConverted(totalWithDiscount) }}
                        </div>
                    </div>
                </div>
            </div>
            <div id="couponCode" class="option text-color-2 margin5 text-11-600 ">
                <p>Código de cupom de desconto: </p>
                <button id='button-coupon' class="btn btn-primary btn-small" @click="showCupons">Exibir
                    Todos</button>
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
                <input type="text" v-model="paymentOption" class="item-input" placeholder="">
            </div>
        </div>
        <div class="customerBasicInfo">
            <img class="logo" src="@/assets/images/menu/menu_3.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle text-14-600">Para</p>
                <p class="customInfo text-14 text-color-3" v-if="userInfo.addresses[0]">{{ userInfo.full_name }} | {{ userInfo.phone }}</p>
                <p class="customInfo text-14 text-color-3" v-else>Carregando informações do usuário...</p>
            </div>
        </div>
        <div class="customerBasicInfo">
            <img class="logo" src="@/assets/images/extra/location.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle text-14-600">Receber em</p>
                <p class="customInfo text-14 text-color-3" v-if="userInfo.addresses[0]">
                    {{ userInfo.addresses[0].street }}, {{ userInfo.addresses[0].address_number }} - 
                    {{ userInfo.addresses[0].complement }}, {{ userInfo.addresses[0].neighborhood }} - 
                    {{ userInfo.addresses[0].state }}
                </p>
                <p class="customInfo text-14 text-color-3" v-else>Carregando informações do usuário...</p>
            </div>
        </div>
        <div class="customerBasicInfo mgb0">
            <img class="logo" src="@/assets/images/extra/comentario.png" alt="">
            <div class="customerBasicDescription">
                <p class="customerInfoTitle text-14-600">Observações</p>
            </div>
        </div>

        <div class="customerObservation margin5">
            <textarea v-model="obs" class="textObs w-100" placeholder="(Optional)" maxlength="240"></textarea>
        </div>
        <div class="orderAction margin5">
            <button class="btn btn-all btn-primary " @click="order">Pedir</button>
        </div>
        <div class="footer-info margin5 text-12">
            <p>Venda proibida para menores de 18 anos.<br> Apresente documento com foto na entrega para comprovar a
                sua
                idade (+18).</p>
        </div>
        <div v-show="isCoupon" class="backgroundTransparent"></div>
        <transition name="slide-fade">
            <div v-show="isCoupon" id="couponModal" class="home_box_form border-radius-top transition-modal">

                <div class="text-16-600 text-color-3 d-flex flex-row justify-content-between align-items-center">
                    CUPONS DISPONÍVEIS
                    <img @click="hideCupons" src="../assets/images/extra/fechar.png">
                </div>
                <div class="couponList">
                    <div v-for="voucher in vouchers" :key="voucher.id" :class="{ 'couponSelected': voucher.selected }"
                        class="couponContainer box-item gap-1 cursor-pointer" @click="applyVoucher(voucher)">
                        <div class="w-100 d-flex flex-row justify-content-start align-items-center gap-1">
                            <div class="discountCoupon w-20 d-flex justify-content-center text-14-600">
                                {{ voucher.discount }}</div>
                            <div class="nameCoupon text-16-600">{{ voucher.code }}</div>
                        </div>
                        <div class="descriptionCoupon text-12 text-color-3">
                            Desconto: {{ amountConverted(voucher.discount) }}, Acima de R$40,00. Válido até {{
                                voucher.date_expiration }}.
                            {{ voucher.description }}
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    name: 'ShoppingBagView',
    components: {
    },
    data() {
        return {
            cartItems: [],
            isCoupon: false,
            vouchers: [],
            token: Cookie.get('slow_token'),
            deliveryFee: 10.00,
            is_delivery_free: false,
            selectedVoucher: null,
            userInfo: {
                img: null,
                full_name: '',
                phone: '',
                addresses: []
            },
            paymentOption: '',
            obs: ''
        }
    },
    computed: {
        totalAmount() {
            console.log(Cookie.get('slow_token'))
            return this.cartItems.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        },
        totalWithDiscount() {
            let total = this.totalAmount + this.deliveryFee;
            if (this.selectedVoucher) {
                if (this.selectedVoucher.is_delivery_free) {
                    total -= this.deliveryFee;
                }
                total -= parseFloat(this.selectedVoucher.discount);
            }
            return total;
        }
    },
    methods: {
        UserInfo() {
            this.$http.get("user/info", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: 'Bearer ' + this.token
                }
            })
                .then((response) => {
                    this.userInfo = response.data.data;
                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        this.showAlert('error', error.response.data.message);
                    } else {
                        this.showAlert('error', 'Erro desconhecido.');
                    }
                });
        },
        coupon() {
            this.$http.get("user/vouchers", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: 'Bearer ' + this.token
                },
            })
                .then((response) => {
                    this.vouchers = response.data.item.map(voucher => ({
                        ...voucher,
                        date_expiration: this.formatDate(voucher.date_expiration.split(' ')[0])
                    }));
                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        this.showAlert('error', error.response.data.message);
                    } else {
                        this.showAlert('error', 'Erro desconhecido.');
                    }
                });
        },
        formatDate(dateString) {
            const [year, month, day] = dateString.split('-');
            return `${day}/${month}/${year}`;
        },
        applyVoucher(voucher) {
            if (this.selectedVoucher === voucher) {
                voucher.selected = false;
                this.selectedVoucher = null;
                this.deliveryFee = 10.00
            } else {
                if (this.selectedVoucher) {
                    this.selectedVoucher.selected = false;
                }
                voucher.selected = true;
                this.selectedVoucher = voucher;
                if (this.selectedVoucher.is_delivery_free) {
                    this.deliveryFee = 0.00
                }
            }
        },
        amountConverted(value) {
            return value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
        },
        decreaseAmount(id) {
            const index = this.cartItems.findIndex(item => item.id === id);
            if (index !== -1 && this.cartItems[index].quantity > 1) {
                this.cartItems[index].quantity--;
                this.updateLocalStorage();
            }
        },
        increaseAmount(id) {
            const index = this.cartItems.findIndex(item => item.id === id);
            if (index !== -1) {
                this.cartItems[index].quantity++;
                this.updateLocalStorage();
            }
        },
        deleteItem(id) {
            const index = this.cartItems.findIndex(item => item.id === id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
                this.updateLocalStorage();
            }
        },
        updateLocalStorage() {
            localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
        },
        order() {
            this.cartItems = []
            this.updateLocalStorage();

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
        },

    },
    created() {
        const storedCart = JSON.parse(localStorage.getItem('cartItem')) || [];
        this.cartItems = storedCart.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));

    },
    mounted() {
        this.coupon();
        this.UserInfo();
    }
}
</script>
