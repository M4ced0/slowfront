<template>
  <div class="base">
    <header class="headerOrderStatus">
      <div class="mapImageContainer">
        <img
          src="https://i.imgur.com/BpkRARd.png"
          alt="Map Image"
          class="mapImage"
        />
        <div class="containerMsgOrderStatus">
          <div class="iconContainer">
            <img
              src="https://i.imgur.com/0QKWomq.png"
              alt="Icon"
              class="statusIcon"
            />
          </div>
          <div class="msgOrderStatus">
            <div class="text-color-3 text-11-600">15:31 | 19/02/2024</div>
            <div class="text-color-primary text-20-600">
              Recebemos seu pedido
            </div>
            <div class="circle-line">
              <div class="circle completed">
                <img src="https://i.imgur.com/oKE4HZ9.png" alt="Step 1" class="circle-img" />
              </div>
              <div class="line completed"></div>
              <div class="circle">
                <img src="https://i.imgur.com/cR4Pz67.png" alt="Step 2" class="circle-img" />
              </div>
              <div class="line"></div>
              <div class="circle">
                <img src="https://i.imgur.com/gDD4oww.png" alt="Step 3" class="circle-img" />
              </div>
              <div class="line"></div>
              <div class="circle">
                <img src="https://i.imgur.com/4ec5vmo.png" alt="Step 4" class="circle-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="wrapper5h"></div>
    <div class="customerBasicInfo">
      <img class="logo" src="@/assets/images/menu/menu_3.png" alt="" />
      <div class="customerBasicDescription">
        <p class="customerInfoTitle text-13-600">Para</p>
        <p class="customInfo text-14 text-color-3">
          Cássio Leão | (75) 988332510
        </p>
      </div>
    </div>
    <div class="customerBasicInfo">
      <img class="logo" src="@/assets/images/extra/location.png" alt="" />
      <div class="customerBasicDescription">
        <p class="customerInfoTitle text-13-600">Receber em</p>
        <p class="customInfo text-14 text-color-3">
          Rua São Bartolomeu, 97 - Ao lado blabla Amparo, Santo Antônio de Jesus
          - BA
        </p>
      </div>
    </div>
    <div class="wrapper5h"></div>
    <div class="orderDetails margin5">
      <div class="orderDetailsHeader margin5 text-16">
        <div class="orderDetailsHeaderTitle">
          <img
            class=""
            src="@/assets/images/extra/bolsa-de-dinheiro (1).png"
            alt=""
          />
          <div class="titleOrderDetails bolderFont text-16-600">
            Total: 325,00
          </div>
        </div>
        <div class="wrapper"></div>
        <div class="text-13 text-color-3">
          <div class="text-13 text-color-3 d-flex flex-row align-items-center">
            Status do pagamento:
            <div class="statusPagamento text-10"><b>não pago</b></div>
          </div>
        </div>
        <div class="wrapper"></div>
        <div class="OverviewOrder">
          <div class="sideOverview text-11">
            <p class="itemOverview">Forma de pagamento:</p>
            <p class="itemOverview">Montante Recebido:</p>
            <p class="itemOverview">Troco:</p>
          </div>
          <div class="sideOverview right text-11">
            <p class="itemOverview">Dinheiro</p>
            <p class="itemOverview">R$ 500,00</p>
            <p class="itemOverview">R$ 175,00</p>
          </div>
        </div>
      </div>
      <div class="wrapper"></div>
      <div class="margin5">
        <div class="orderDetailsHeaderTitle text-16-600">
          <div class="titleOrderDetails">Resumo dos custos</div>
        </div>
        <div class="wrapper"></div>
        <div class="OverviewCosts">
          <div
            class="overviewItemDescription dashedBorder text-color-2 text-11"
          >
            <p class="itemOverview">Produto(s):</p>
            <p class="itemOverview">R$ 240,00</p>
          </div>
          <div
            class="overviewItemDescription dashedBorder text-color-2 text-11"
          >
            <p class="itemOverview">Taxa de entrega:</p>
            <p class="itemOverview">R$ 7,00</p>
          </div>
          <div
            class="overviewItemDescription dashedBorder text-color-2 text-11"
          >
            <p class="itemOverview">Cupom:</p>
            <p class="itemOverview">-R$ 15,00</p>
          </div>
          <div class="overviewItemDescription text-13 text-color-2 marginTB2">
            <p class="itemOverview">Total:</p>
            <p class="itemOverview">R$ 325,00</p>
          </div>
        </div>
      </div>
    </div>
    <div class="orderDetails margin5">
      <div class="orderDetailsHeader margin5 text-16 solidBorderOrderStatus">
        <div class="orderDetailsHeaderTitle padding5vw">
          <img class="" src="@/assets/images/extra/caixa.png" alt="" />
          <div class="titleOrderDetails bolderFont text-16-600">
            Seu pedido:&nbsp;
          </div>
          <div class="titleOrderDetails bolderFont text-16-600 blueText">
            3 produto(s)
          </div>
        </div>
        <div class="wrapper"></div>
      </div>
      <div class="listItemProductStatus">
        <div class="itemProductStatus solidBorderOrderStatus">
          <div class="itemProductStatusImg">
            <img class="" src="@/assets/images/itens/elf_bar_te.png" alt="" />
          </div>
          <div class="itemDescriptionProductStatus text-14 w-70">
            <div class="itemDescriptionTotalProductStatus text-color-3">
              <div class="">2x Elf Bar TE5000</div>
              <div>R$ 240,00</div>
            </div>
            <div class="itemDescriptionTotalProductStatus text-11">
              <div>Preço unitário</div>
              <div>R$ 120,00</div>
            </div>
          </div>
        </div>
        <div class="itemProductStatus">
          <div class="itemProductStatusImg">
            <img
              class=""
              src="@/assets/images/itens/elf_bar_bc4000.png"
              alt=""
            />
          </div>
          <div class="itemDescriptionProductStatus text-14 w-70">
            <div class="itemDescriptionTotalProductStatus text-color-3">
              <div class="text-color-grey">1x Elf Bar BC4000</div>
              <div>R$ 240,00</div>
            </div>
            <div class="itemDescriptionTotalProductStatus text-11">
              <div>Preço unitário</div>
              <div>R$ 120,00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="orderAction margin5">
      <button class="btn btn-all btn-primary" @click="order">
        Confirmar entrega
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderView",
  components: {},
  methods: {
    back() {
      this.$router.push("/shopping-bag");
    },
    category() {
      this.$router.push("/category");
    },
  },
};
</script>