<template>
    <div class="base d-flex flex-column justify-content-around align-items-center">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">MINHA CONTA</div>
        </header>
        <main class="w-90 d-flex flex-column justify-content-around align-items-center gap-3">
            <div class="profilePicture">
                <img class="w-100" src="@/assets/images/extra/user.png" alt="">
            </div>
            <div class="wrapper"></div>
            <input type="text" class="item-input" placeholder="Nome do usuário">
            <input type="text" class="item-input" placeholder="Data de nascimento">
            <input type="text" class="item-input" placeholder="Telefone">
            <input type="text" class="item-input" placeholder="Email">
            <div class="d-flex flex-row gap-1">
                <input type="checkbox" id="subscribe" name="subscribe">
                <label for="subscribe" class="text-13-600 text-color-3">Quero receber cupons de desconto e ofertas da
                    Slow por e-mail e whatsapp.</label>
            </div>
            <div class="wrapper"></div>
            <div class="deleteAccount text-14-bold">
                <span class="material-icons text-20">delete</span>
                <span>Excluir minha conta</span>
            </div>
            <button class="btn btn-all btn-primary ">Salvar</button>
            <div class="wrapper"></div>
        </main>

    </div>
</template>
<script>


export default {
    name: 'MyAccountView',
    components: {
    },
    methods: {
        back() {
            this.$router.push('/profile')
        },
    }
}
</script>
