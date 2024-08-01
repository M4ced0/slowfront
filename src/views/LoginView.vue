<template>
    <div class="base">
        <main class="login-register">
            <div id="login" class="home_box">
                <div class="home_box_form border-radius-top">
                    <div v-if="isLogin" class="box_login">
                        <div class="home_box_login">
                            <div class="home_box_title">
                                <label class="text-18-600 text-color-1">Entre ou Cadastre-se</label>
                            </div>
                            <div class="group-input">
                                <input type="text" class="item-input" v-model="phone" placeholder="(00) 00000-0000"
                                    v-mask="'(00) 0 0000-0000'">
                                <button class="btn btn-black btn-small" @click="enter">
                                    <i class="material-icons">chevron_right</i>
                                </button>
                            </div>
                        </div>
                        <div class="home_box_subtitle">
                            <label class="item-subtitle text-12-600 text-color-3">
                                Nessa loja virtual é proibida a venda para menores de 18 anos. Se houver produtos
                                proibidos adicionados, apresente um documento com foto na entrada para compovar a sua
                                idade (+18).
                            </label>
                        </div>
                    </div>
                    <div v-if="isRegister" class="box_register">
                        <div class="home_box_top">
                            <div class="home_box_title">
                                <label class="text-18-600 text-color-1">Crie sua conta</label>
                            </div>

                            <div class="group-input">
                                <input type="text" class="item-input" placeholder="Nome completo" v-model="full_name">
                            </div>
                            <div class="group-input">
                                <input type="date" class="item-input" placeholder="Data de nascimento" v-model="birth">
                            </div>
                            <div class="group-input">
                                <input type="email" class="item-input" placeholder="E-mail" v-model="email">
                            </div>
                            <div class="group-input">
                                <input type="number" class="item-input" placeholder="DDD + Seu número" v-model="phone"
                                    readonly v-mask="'(00) 0 0000-0000'">
                            </div>

                            <div class="group-input">
                                <div class="switch__container">
                                    <input id="switch-shadow" class="switch switch--shadow" type="checkbox"
                                        v-model="isCheck" />
                                    <label for="switch-shadow"></label>
                                </div>
                                <label class="text-14-600 w-70">Eu li e concordo com os <span
                                        class="text-color-primary">Termos de Uso</span> e <span
                                        class="text-color-primary">Políticas de Privacidade.</span></label>
                            </div>
                            <div class="group-input">
                                <button class="btn btn-black btn-all text-14-600" @click="register">
                                    Criar conta
                                </button>
                            </div>
                            <div class="home_box_subtitle w-100 text-center">
                                <label class="item-subtitle text-16-600 text-color-3">
                                    Já tem cadastro? <span class="text-color-primary cursor-pointer"
                                        @click="enter">Entrar na conta</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="isConfirm" class="box_confirm">
                        <div class="home_box_top">
                            <div class="home_box_title">
                                <label class="text-18-600 text-color-1">Confirmação de número</label>
                            </div>
                            <div class="home_box_subtitle">
                                <label class="item-subtitle text-16 text-color-3">
                                    Um código de confirmação de 04 digitos foi enviado para <span
                                        class="text-16-600 text-color-black">{{ phone }}</span> no whatsapp. Digite o
                                    código para confirmar a sua conta.

                                </label>
                            </div>
                            <div class="home_box_login">
                                <div class="group-input">
                                    <input type="text" class="item-input code-confirm" v-model="code"
                                        placeholder="Código">
                                    <button class="btn btn-black btn-small" @click="confirm">
                                        <i class="material-icons">chevron_right</i>
                                    </button>
                                </div>
                            </div>
                            <div class="home_box_subtitle w-100 text-center">
                                <label class="item-subtitle text-16 text-color-3">
                                    Ainda não chegou?
                                </label>
                                <br>
                                <label v-if="!showButton" class="item-subtitle text-16 text-color-3">
                                    Aguarde <span class="text-color-black text-14-600">
                                        {{ seconds }}
                                    </span> para reenviar
                                </label>
                                <div class="wrapper2vh"></div>
                                <button class="btn btn-all " v-if="showButton" @click="handleButtonClick">Reenviar código</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
import AppMixin from '@/App.vue';


export default {
    mixins: [AppMixin],
    data() {
        return {
            isRegister: false,
            isConfirm: false,
            isLogin: true,
            phone: '',
            full_name: '',
            birth: '',
            email: '',
            code: '',
            country: 0,
            isCheck: false,
            seconds: 59,
            showButton: false,
            timerId: null,
        }
    },
    beforeUnmount() {
        clearInterval(this.timerId);
    },
    methods: {
        startTimer() {
            this.timerId = setInterval(() => {
                this.seconds--;
                if (this.seconds <= 0) {
                    clearInterval(this.timerId);
                    this.showButton = true;
                }
            }, 1000);
        },
        handleButtonClick() {
            alert("handleButtonClick")
        },
        clear() {
            this.full_name = '',
                this.email = '',
                this.birth = ''
        },
        register() {
            if (!this.isCheck) {
                this.showAlert('error', 'Aceite os termos de uso e políticas de privacidade');
                return;
            }

            var json = {
                full_name: this.full_name,
                email: this.email,
                birth: this.birth,
                phone: this.phone.replace(/\D/gm, '')
            }

            this.$http.post("/register", json, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
                .then((response) => {
                    this.showAlert('success', response.data.message);
                    this.clear();
                    this.isRegister = !this.isRegister
                    this.isLogin = !this.isLogin

                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        this.showAlert('error', error.response.data.message);
                    } else {
                        this.showAlert('error', 'Erro desconhecido.');
                    }
                });
        },
        confirm() {
            var json = {
                phone: this.phone.replace(/\D/gm, ''),
                code: this.code,
            }

            this.$http.post("/login", json, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
                .then((response) => {
                    if (response.data.status == false) {
                        this.showAlert('error', response.data.message);
                        return;
                    }

                    Cookie.set('slow_token', response.data.token);
                    this.$router.push('/home');

                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        this.showAlert('error', error.response.data.message);
                    } else {
                        this.showAlert('error', 'Erro desconhecido.');
                    }
                });
        },
        enter() {
            var json = {
                phone: this.phone.replace(/\D/gm, ''),
            }

            this.$http.post("/code", json, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            })
                .then((response) => {
                    if (response.data.status == false) {
                        this.isLogin = !this.isLogin;
                        this.isRegister = !this.isRegister;
                        return;
                    }

                    this.isLogin = !this.isLogin;
                    this.isConfirm = !this.isConfirm;
                    this.startTimer();
                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        this.showAlert('error', error.response.data.message);
                    } else {
                        this.showAlert('error', 'Erro desconhecido.');
                    }
                });

        },
        backConfirm() {
            this.isLogin = !this.isLogin
            this.isConfirm = !this.isConfirm
        },
        onUpdate(payload) {
            this.country = payload.countryCallingCode
        },
    },
}
</script>
