<template>
    <nav class="navbar box-item">
        <ul class="menu">
            <li class="item-menu actived" @click="home">
                <img src="@/assets/images/menu/menu_1.png" alt="Home" width="50">
            </li>
            <li class="item-menu">
                <img src="@/assets/images/menu/menu_2.png" alt="Sales" width="40">
            </li>
            <li class="item-menu">
                <img src="@/assets/images/menu/menu_3.png" alt="Users" width="30">
            </li>
            <li class="item-menu" @click="shoppingBag">
                <img src="@/assets/images/menu/menu_4.png" alt="Shopping Bag" width="30">
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        shoppingBag() {
            this.$router.push('/shopping-bag')
        },
        home() {
            this.$router.push('/home')
        }
    }
}
</script>