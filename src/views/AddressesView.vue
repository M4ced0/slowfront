<template>
    <div class="base">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">Endereços</div>
        </header>
        <main class="content">
            <section class="search">
                <div class="title-offers p-title text-color-2 p-0 m-0 text-18-600">
                    Adicionar novo endereço
                </div>
                <div class="group-input">
                    <input type="text" class="item-input" placeholder="Buscar endereço pelo CEP" v-model="cep">
                    <button class="btn btn-black btn-small" @click="search">
                        <i class="material-icons">search</i>
                    </button>
                </div>
            </section>
            <section v-if="isSearch" class="my-addresses mt-10">
                <div class="title-offers p-title text-color-2 p-0 m-0 text-18-600">
                    Resultado
                </div>
                <div class="list-address m-0 d-flex align-items-center gap-2">
                    <div class="address">
                        <i class="material-icons text-color-4">gps_fixed</i>
                        <div class="location">
                            <p class="m-0 text-color-2 text-14">{{search_address}}</p>
                            <p class="m-0 text-color-2 text-14">{{search_address_extra}}</p>
                        </div>
                    </div>
                    
                    <button class="btn btn-black btn-small" @click="add">
                        <i class="material-icons">add</i>
                    </button>
                </div>
                <div class="d-flex gap-2">
                    <input type="text" class="item-input w-50" placeholder="Completo" v-model="complement">
                    <input type="text" class="item-input w-20" placeholder="Número" v-model="number">
                </div>
            </section>
            <section class="my-addresses">
                <div class="title-offers p-title text-color-2 p-0 m-0 text-18-600">
                    Meus endereços
                </div>
                <div class="list-address">
                    <div v-for="(address, index) in addresses" :key="address.id" class="address" :class="{'active': address.active == 1}">
                        <i class="material-icons text-color-4">gps_fixed</i>
                        <div class="location">
                            <p class="text-color-2 text-16 address-actual">Endereço {{ index + 1 }} <span v-if="address.active == 1">- Atual</span></p>
                            <p class="text-color-4 text-14">{{address.street}}, {{address.neighborhood}} - Nº {{address.address_number}}</p>
                            <p class="text-color-4 text-14">{{address.city}} - {{address.state}}</p>
                        </div>
                    </div> 
                </div>
            </section>
        </main>

        <NavBar />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Cookie from 'js-cookie'
import AppMixin from '@/App.vue';

export default {
    mixins: [AppMixin],
    components:{
        NavBar,
    },
    data(){
        return {
            cep: '',
            number: '',
            complement: '',
            addresses: '',
            isSearch: false,
            search_address: '',
            search_address_extra: '',
            token: Cookie.get('slow_token'),
        }
    },
    methods: {
        search(){
            this.isSearch = false;

            this.$http.get("user/address/"+this.cep, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: 'Bearer ' + this.token
                },
            })
            .then((response) => {
                var endereco = response.data;

                this.search_address = endereco.logradouro+', Bairro: '+endereco.bairro;
                this.search_address_extra = endereco.cidade.nome +' - '+endereco.estado.sigla;

                this.isSearch = true;
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    this.showAlert('error', error.response.data.message);
                } else {
                    this.showAlert('error', 'Erro desconhecido.');
                }
            });
        },
        load(){
            this.isSearch = false;

            this.$http.get("user/address", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: 'Bearer ' + this.token
                },
            })
            .then((response) => {
                this.addresses = response.data.items;
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    this.showAlert('error', error.response.data.message);
                } else {
                    this.showAlert('error', 'Erro desconhecido.');
                }
            });
        },
        add(){
            var json = {
                cep: this.cep,
                number: this.number,
                complement: this.complement
            }

            this.$http.post("user/address", json, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: 'Bearer ' + this.token
                },
            })
            .then((response) => {
                this.showAlert('success', response.data.message);
                this.isSearch = false;
                this.cep = '';
                this.number = '';
                this.complement = '';

                this.load();
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    this.showAlert('error', error.response.data.message);
                } else {
                    this.showAlert('error', 'Erro desconhecido.');
                }
            });
        },
        back(){
            this.$router.push('/home')
        }
    },
    created() {
        this.load();
    }
}
</script>