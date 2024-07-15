<template>
    <div class="base">
        <div class="mainInfoUser" @click="myAccount">
            <div class="infoUser">
                <div class="text-22-600 text-color-black">Cássio Leão</div>
                <div class="wrapper"></div>
                <div class="text-color-3 text-16">(75) 98332510</div>
            </div>
            <div class="profilePicture">
                <img class="w-100" src="@/assets/images/extra/user.png" alt="">
            </div>
        </div>
        <div class="scoreUser margin5">
            <div class="text-color-primary">
                Meus pontos
            </div>
            <div class="text-color-3">
                0
            </div>
        </div>
        <div class="wrapper5h"></div>
        <div class="opProfile margin5" role="button" >
            <div class="iconOpProfile w-10 margin5">
                <img class="w-100 " src="@/assets/images/extra/apartamento.png" alt="">
            </div>
            <div class="titleOpProfile text-18-600 ">Endereços</div>
        </div>
        <div class="wrapper2vh"></div>
        <div class="opProfile margin5" role="button" @click="coupons">
            <div class="iconOpProfile w-10 margin5" >
                <img class="w-100 " src="@/assets/images/extra/codigo-promocional (1).png" alt="">
            </div>
            <div class="titleOpProfile text-18-600 ">Cupons</div>
        </div>
        <div class="wrapper2vh"></div>
        <div class="opProfile margin5" role="button" >
            <div class="iconOpProfile w-10 margin5">
                <img class="w-100 " src="@/assets/images/extra/codigo-promocional (1).png" alt="">
            </div>
            <div class="titleOpProfile text-18-600 ">Pedidos</div>
        </div>
        <div class="wrapper2vh"></div>
        <div class="opProfile margin5" role="button" >
            <div class="iconOpProfile w-10 margin5">
                <img class="w-100 " src="@/assets/images/extra/codigo-promocional (1).png" alt="">
            </div>
            <div class="titleOpProfile text-18-600 ">Suporte</div>
        </div>
        <div class="wrapper2vh"></div>
        <div class="opProfile margin5" role="button"  @click="logout">
            <div class="iconOpProfile w-10 margin5">
                <img class="w-100 " src="@/assets/images/extra/codigo-promocional (1).png" alt="">
            </div>
            <div class="titleOpProfile text-18-600">Sair</div>
        </div>
        <div class="wrapper100"></div>
        <NavBar />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Cookie from 'js-cookie'
import AppMixin from '@/App.vue';

export default {
    name: 'ProfileView',
    mixins: [AppMixin],
    components: {
        NavBar,
    },
    methods: {
        coupons() {
            this.$router.push('/coupons');
        },
        myAccount() {
            this.$router.push('/my-account');
        },
        logout(){
            this.$router.push('/');
            this.showAlert('success', 'Você saiu da sua conta!');
            Cookie.remove('slow_token');
        }
    },
}
</script>
