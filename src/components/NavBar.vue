<template>
    <nav class="navbar box-item">
        <ul class="menu">
            <li @click="home" :class="isHomeActive ? 'item-menu actived' : 'item-menu'">
                <img src="@/assets/images/menu/menu_1.png" alt="Home" width="50">
            </li>
            <li @click="sales"  :class="isSalesActive ? 'item-menu actived' : 'item-menu'" >
                <img src="@/assets/images/menu/menu_2.png" alt="Sales" width="40">
            </li>
            <li :class="isProfileActive ? 'item-menu actived' : 'item-menu'" @click="profile(); selectTab('profile');">
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
    data() {
        return {
            isHomeActive: false,
            isSalesActive: false,
            isProfileActive: false,
        };
    },
    created() {
        this.selectTab(this.$route.path);
    },
    methods: {
        selectTab(path) {
            this.isHomeActive = path === '/home';
            this.isSalesActive = path === '/sales';
            this.isProfileActive = path === '/profile';
        },
        sales() {
            this.$router.push('/sales');
        },
        profile() {
            this.$router.push('/profile');
        },
        shoppingBag() {
            this.$router.push('/shopping-bag');
        },
        home() {
            this.$router.push('/home');
        }
    },
    watch: {
        '$route.path': function(path) {
            this.selectTab(path);
        }
    }
}
</script>
