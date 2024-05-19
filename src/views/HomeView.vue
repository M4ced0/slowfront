<template>
    <div class="base">
        <header class="header home">
            <div class="infos">
                <img class="logo" src="@/assets/images/logo-2.png" alt="">
                <div class="address">
                    <label class="text-20-600 text-color-1">14/02/2024 | 01:00</label>
                    <label class="addess-actived text-13-600 text-color-1 cursor-pointer" @click="addresses">
                        <span>Rua São Bartolomeu, 97</span>
                        <i class="material-icons text-color-primary">expand_more</i>
                    </label>
                </div>
            </div>
            <div class="search">
                <div class="group-input">
                    <input type="text" class="item-input" placeholder="Procurar produtos">
                    <button class="btn btn-black btn-small">
                        <i class="material-icons">search</i>
                    </button>
                </div>
            </div>
        </header>
        <main class="content">
            <section class="categories">
                <div class="slide-categories">
                    <swiper 
                    :slidesPerView="4" 
                    :grid="{
                        rows: 2,
                    }" 
                    :spaceBetween="10" 
                    :pagination="{
                        clickable: true,
                    }" 
                    :modules="modules" 
                    class="mySwiper"
                    >
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/pods.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Pods</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/cigarros.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Cigarros</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/palheiros.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Palheiros</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/tabacos.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Tabacos</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/sedas.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Sedas</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/piteiras.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Piteiras</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/fumos.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Fumos</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category" @click="category">
                                <div class="item-category">
                                    <img src="@/assets/images/categories/glicose.png" alt="">
                                </div>
                                <span class="name-category text-color-black text-16">Glicose</span>
                            </div>
                        </swiper-slide>
                        <swiper-slide></swiper-slide>
                    </swiper>
                </div>
            </section>
            <section class="highlights">
                <div class="title-highlights p-title text-18-600">
                    Destaques
                </div>
                <div class="slide-highlights">
                    <div class="item-highlights">
                        <img src="@/assets/images/destaques/destaque_1.png" alt="">
                    </div>
                    <div class="item-highlights">
                        <img src="@/assets/images/destaques/destaque_2.png" alt="">
                    </div>
                </div>
            </section>
            <section class="offers">
                <div class="title-offers p-title text-18-600">Ofetas</div>
                <div class="slide-offers">
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/socb2.png" alt="">
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
                    </div>
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/elf_bar_te.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 95,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até -15%</span>
                                <span class="text-12 text-color-3">R$ 120,00</span>
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">500 Puffs</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="categories">
                <div class="title-offers p-title text-18-600">
                    Marcas que amamos
                </div>
                <div class="slide-categories">
                    <div class="category">
                        <div class="item-category favorite">
                            <img src="@/assets/images/marcas/marca1.png" alt="">
                        </div>
                    </div>
                    <div class="category">
                        <div class="item-category favorite">
                            <img src="@/assets/images/marcas/marca2.png" alt="">
                        </div>
                    </div>
                    <div class="category">
                        <div class="item-category favorite">
                            <img src="@/assets/images/marcas/marca3.png" alt="">
                        </div>
                    </div>
                    <div class="category">
                        <div class="item-category favorite">
                            <img src="@/assets/images/marcas/marca4.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="produts">
                <div class="title-produts p-title text-18-600">Produtos</div>
                <div class="slide-produts">
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/tabc2.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 6,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até 15%</span>
                                <span class="text-12 text-color-3">R$ 8,30</span>
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/cgrmkx.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 6,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até 15%</span>
                                <span class="text-12 text-color-3">R$ 8,30</span>
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/tabc3.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 6,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até 15%</span>
                                <span class="text-12 text-color-3">R$ 8,30</span>
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/dpaia1.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 6,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até 15%</span>
                                <span class="text-12 text-color-3">R$ 8,30</span>
                            </div>
                            <div class="item-name text-color-3 p-title">
                                <span class="name text-13-600 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
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

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

export default {
    name: 'HomeView',
    components: {
        NavBar,
        Swiper,
        SwiperSlide
    },
    methods: {
        addresses() {
            this.$router.push('/addresses')
        },
        category() {
            this.$router.push('/category')
        }
    },
    setup() {
        return {
            modules: [Grid, Pagination],
        };
    },
}
</script>