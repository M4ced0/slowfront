<template>
    <div class="base">
        <header class="header home">
            <div class="infos">
                <img class="logo" src="@/assets/images/logo-2.png" alt="">
                <div class="address">
                    <label class="text-20-600 text-color-1">{{ currentDate }}</label>
                    <label class="addess-actived text-13-600 text-color-1 cursor-pointer" @click="addresses">
                        <span>Rua São Bartolomeu, 97</span>
                        <i class="material-icons text-color-primary">expand_more</i>
                    </label>
                </div>
            </div>
            <div class="search">
                <div class="group-input">
                    <input type="text" class="item-input" placeholder="Procurar produtos" v-model="searchQuery"
                        @input="search">
                    <button class="btn btn-black btn-small">
                        <i class="material-icons">search</i>
                    </button>
                </div>
            </div>
        </header>
        <main class="content">
            <section class="categories">
                <div class="slide-categories">
                    <swiper :slidesPerView="4" :grid="{
                        rows: 2,
                        fill: 'row'
                    }" :spaceBetween="5" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="item in categories" :key="item.id">
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img :src="storage + '/' + item.img" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">{{ item.name }}</span>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <section class="highlights">
                <div class="title-highlights p-title text-18-600">
                    Destaques
                </div>
                <div class="slide-highlights">
                    <swiper :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="5" class="mySwiper">
                        <swiper-slide v-for="item in highlights" :key="item.id">
                            <div class="item-highlights">
                                <img :src="storage + '/' + item.image" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <section class="offers">
                <div class="title-offers p-title text-18-600">Ofetas</div>
                <div class="slide-offers">
                    <div class="slide-offers" v-for="item in sales" :key="item.id">
                        <div class="item-product box-item" v-for="(product, index) in item.products" :key="index">
                            <div class="img-offer">
                                <img :src="storage + '/' + product.img" alt="Product Image">
                            </div>
                            <div class="infos">
                                <div class="price text-color-primary text-16-600">
                                    {{ amountConverted(product.price - item.discount) }}
                                </div>
                                <div class="promo">
                                    <span class="tag tag-primary text-12">{{ item.type_promotion }}</span>
                                    <span class="text-12 text-color-3">{{ amountConverted(product.price) }}</span>
                                </div>
                                <div class="item-name text-color-3 p-title">
                                    <span class="name text-13-600">{{ product.name }}</span>
                                    <span class="text-10">{{ product.description }}</span>
                                </div>
                                <div class="add w-100">
                                    <button class="btn btn-all btn-primary">Adicionar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="item-product box-item" v-for="item in sales" :key="item.id">
                        <div class="img-offer">
                            <img :src="storage + '/' + item.img" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 6,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até -15%</span>
                                <span class="text-12 text-color-3">R$ 8,60</span>
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">OCB Slim Premium</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div> -->
                </div>
            </section>
            <section class="categories">
                <div class="title-offers p-title text-18-600">
                    Marcas que amamos
                </div>
                <div class="slide-categories">
                    <swiper :slidesPerView="4" :spaceBetween="5" class="mySwiper">
                        <swiper-slide v-for="item in brands" :key="item.id">
                            <div class="category">
                                <div class="item-category favorite">
                                    <img :src="storage + '/' + item.img" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <section class="produts">
                <div class="title-produts p-title text-18-600">Produtos</div>
                <div class="slide-produts">
                    <div class="item-product box-item" v-for="item in products" :key="item.id">
                        <div class="img-offer">
                            <img :src="storage + '/' + item.img" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">{{ amountConverted(item.price) }}</div>
                            <div class="promo">
                                <!-- <span class="tag tag-primary text-12">Até 15%</span>
                                <span class="text-12 text-color-3">R$ 8,30</span> -->
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">{{ item.name }}</span>
                                <span class="text-10">{{ item.description }}</span>
                            </div>
                            <div class="add w-100">
                                <button @click="addToCart(item)" class="btn btn-all btn-primary">Adicionar</button>
                            </div>
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

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid } from 'swiper/modules';

export default {
    name: 'HomeView',
    data() {
        return {
            currentDate: this.getCurrentDate(),
            searchQuery: '',
            products: [],
            brands: [],
            highlights: [],
            sales: [],
            categories: [],
            filteredProducts: [],
            filteredCategories: [],
            modules: [Grid],
            token: Cookie.get('slow_token'),
            currentCart: []
        }
    },
    mixins: [AppMixin],
    components: {
        NavBar,
        Swiper,
        SwiperSlide
    },
    methods: {
        async search() {
            try {
                const productsResponse = await fetch(`http://127.0.0.1:8000/api/products`);
                const categoriesResponse = await fetch(`http://127.0.0.1:8000/api/categories`);
                this.products = await productsResponse.json();
                this.categories = await categoriesResponse.json();

                this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
                this.filteredCategories = this.categories.filter(category => category.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
            } catch (error) {
                console.error(error);
            }
        },
        addToCart(item) {
            let storedCart = localStorage.getItem('cartItem');
            this.currentCart = storedCart ? JSON.parse(storedCart) : [];
            if (Array.isArray(this.currentCart)) {
                const existingItemIndex = this.currentCart.findIndex(cartItem => cartItem.id === item.id);
                if (existingItemIndex !== -1) {
                    this.currentCart[existingItemIndex].quantity += item.quantity || 1;
                } else {
                    item.quantity = item.quantity || 1;
                    this.currentCart.push(item);
                }
            } else {
                item.quantity = item.quantity || 1;
                this.currentCart = [item];
            }
            localStorage.setItem('cartItem', JSON.stringify(this.currentCart));
            this.$router.push('/shopping-bag');
        },
        addresses() {
            this.$router.push('/addresses')
        },
        category() {
            this.$router.push('/category')
        },
        getCurrentDate() {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            return `${day}/${month}/${year} | ${hours}:${minutes}`;
        },
        load() {
            this.isSearch = false;

            this.$http.get("user/home", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    Authorization: 'Bearer ' + this.token
                },
            })
                .then((response) => {
                    this.categories = response.data.itens.categories;
                    this.highlights = response.data.itens.highlights;
                    this.sales = response.data.itens.sales;
                    this.brands = response.data.itens.brands;
                    this.products = response.data.itens.products;
                })
                .catch((error) => {
                    if (error.response && error.response.data) {
                        this.showAlert('error', error.response.data.message);
                    } else {
                        this.showAlert('error', 'Erro desconhecido.');
                    }
                });
        },
    },
    mounted() {
        setInterval(() => {
            this.currentDate = this.getCurrentDate();
        }, 60000);
    },
    created() {
        this.load();
    }
}
</script>