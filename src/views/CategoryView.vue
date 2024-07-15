<template>
    <div class="base">
        <header class="header page-all">
            <i class="material-icons text-color-primary cursor-pointer" @click="back">chevron_left</i>
            <div class="title text-color-3 text-22-600">Pods</div>
        </header>
        <main class="content">
            <section class="categories">
                <div class="title-offers p-title text-color-2 p-0 m-0 text-18-600">
                    Marcas
                </div>
                <div class="slide-categories">
                    <swiper :slidesPerView="4" :spaceBetween="5" class="mySwiper">
                        <swiper-slide>
                            <div class="category">
                                <div class="item-category favorite">
                                    <img src="@/assets/images/marcas/marca1.png" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category">
                                <div class="item-category favorite">
                                    <img src="@/assets/images/marcas/marca2.png" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category">
                                <div class="item-category favorite">
                                    <img src="@/assets/images/marcas/marca3.png" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category">
                                <div class="item-category favorite">
                                    <img src="@/assets/images/marcas/marca4.png" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="category">
                                <div class="item-category favorite">
                                    <img src="@/assets/images/marcas/marca3.png" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <section class="produts">
                <div class="title-produts p-title text-color-2 text-18-600">Elf Bar TE5000</div>
                <div class="slide-produts">
                    <div class="item-product box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/itens/elf_bar_te.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-primary text-16-600">R$ 95,00</div>
                            <div class="promo">
                                <span class="tag tag-primary text-12">Até - 15%</span>
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
            <section class="produts">
                <div class="title-produts p-title text-color-2 text-18-600">Elf Bar BC4000</div>
                <div class="slide-produts">
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
        </main>

        <NavBar/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';

export default {
    methods: {
        back(){
            this.$router.push('/home')
        }
  },
    components: {
        NavBar,
        Swiper,
        SwiperSlide
    },
}
</script>