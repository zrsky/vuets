<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:43:09
 * @LastEditTime: 2019-10-14 15:39:05
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="home_main">
    <div class="sidebar-con">
        <div class="logo">
            <img src="../assets/images/logo.png" />
        </div>
        <sidebar-menu :openNames="openNames" :menuList="menuList"></sidebar-menu>
    </div>
    <div class="main-header-con" style="padding-left: 60px;">
        <div class="main-header">
            <div class="header-middle-con">
                首页
            </div>
        </div>
    </div>
    <div class="single-page-con">
        <div class="single-page">
            <keep-alive :include="cachePage">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Provide
} from 'vue-property-decorator';
import sidebarMenu from '_c/sidebarMenu.vue';
import {
    State,
    Getter,
    Action,
    Mutation,
    namespace,
} from 'vuex-class';

const someModule = namespace('appVuex');

@Component({
    components: {
        sidebarMenu
    },
})
export default class Home extends Vue {
    @someModule.State(state => state.menuList) menuList: any;
    @someModule.State(state => state.cachePage) cachePage: any;
    @someModule.Mutation('saveMenuList') saveMenuList: any;
    @someModule.Getter('getMenuList') getMenuList: any;

    theme = 'light'

    openNames = ['1']

    mounted() {
        this.saveMenuList();
        console.log(this.menuList);
    }

    public getThis() {
        console.log(this);
    }
}
</script>

<style lang="scss" scoped>
.home_main {
    text-align: left;

    .sidebar-con {
        display: inline-block;

        .logo {
            img {
                height: 44px;
            }
        }
    }

    .main-header-con {
        display: inline-block;
    }
}
</style>
