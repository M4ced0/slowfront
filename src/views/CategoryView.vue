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
                    <div class="category">
                        <div class="item-category favorite">
                            <img src="@/assets/images/ofertas.webp" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="produts">
                <div class="title-produts p-title text-color-2 text-18-600">Elf Bar TE5000</div>
                <div class="slide-produts">
                    <div class="item-product category box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/img_home.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-1 text-16-600 m-0">R$ 6,00</div>
                            <div class="item-name text-color-3 pt-0 p-title m-0 text-color-2">
                                <span class="name text-13-600 pb-0 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product category box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/img_home.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-1 text-16-600 m-0">R$ 6,00</div>
                            <div class="item-name text-color-3 pt-0 p-title m-0 text-color-2">
                                <span class="name text-13-600 pb-0 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product category box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/img_home.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-1 text-16-600 m-0">R$ 6,00</div>
                            <div class="item-name text-color-3 pt-0 p-title m-0 text-color-2">
                                <span class="name text-13-600 pb-0 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
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
                    <div class="item-product category box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/img_home.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-1 text-16-600 m-0">R$ 6,00</div>
                            <div class="item-name text-color-3 pt-0 p-title m-0 text-color-2">
                                <span class="name text-13-600 pb-0 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product category box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/img_home.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-1 text-16-600 m-0">R$ 6,00</div>
                            <div class="item-name text-color-3 pt-0 p-title m-0 text-color-2">
                                <span class="name text-13-600 pb-0 ">Elf Bar TE | Strawberry</span>
                                <span class="text-10">1 Unid c/ 32 folhas</span>
                            </div>
                            <div class="add w-100">
                                <button class="btn btn-all btn-primary">Adicionar</button>
                            </div>
                        </div>
                    </div>
                    <div class="item-product category box-item">
                        <div class="img-offer">
                            <img src="@/assets/images/img_home.png" alt="">
                        </div>
                        <div class="infos">
                            <div class="price text-color-1 text-16-600 m-0">R$ 6,00</div>
                            <div class="item-name text-color-3 pt-0 p-title m-0 text-color-2">
                                <span class="name text-13-600 pb-0 ">Elf Bar TE | Strawberry</span>
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

        <nav class="navbar box-item">
            <ul class="menu">
                <!-- <li class="item-menu">
                    <span class="material-icons">chair</span>
                </li>
                <li class="item-menu">
                    <span class="material-icons">description</span>
                </li>
                <li class="item-menu">
                    <span class="material-icons">person</span>
                </li>
                <li class="item-menu">
                    <span class="material-icons">local_grocery_store</span>
                </li> -->
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.push('/home')
        }
  }
}
</script>