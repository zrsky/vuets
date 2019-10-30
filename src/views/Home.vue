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
    <div class="main-header-con">
        <div class="main-header">
            <div class="header-middle-con">
                首页
            </div>
            <div class="header-avator-con">
                <full-screen v-model="isFullScreen"></full-screen>
                <div class="user-dropdown-menu-con">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            {{ userName }}
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem>个人中心</DropdownItem>
                            <DropdownItem>退出登录</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                </div>
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
import Cookies from 'js-cookie';
import {
    Component,
    Vue,
    Provide
} from 'vue-property-decorator';
import sidebarMenu from '_c/sidebarMenu.vue';
import fullScreen from '_c/fullscreen.vue';
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
        sidebarMenu,
        fullScreen
    },
})
export default class Home extends Vue {
    @someModule.State(state => state.menuList) menuList: any;
    @someModule.State(state => state.cachePage) cachePage: any;
    @someModule.Mutation('saveMenuList') saveMenuList: any;
    @someModule.Getter('getMenuList') getMenuList: any;

    theme = 'light'

    isFullScreen = false

    userName: any = ""

    openNames = ['1']

    mounted() {
        this.saveMenuList();
        this.userName = Cookies.get('user');
        localStorage.avatorImgPath = 'http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg'
        console.log(localStorage);
    }

    public getThis() {
        console.log(this);
    }

    get avatorPath() {
        return localStorage.avatorImgPath;
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
        height: 100px;
        vertical-align: top;
        padding-left: 200px;
        width: 100%;
        position: fixed;
        left: 0;
        box-sizing: border-box;
        z-index: 1;
        .main-header {
            height: 60px;
            line-height: 60px;
            font-size: 14px;
            font-weight: bold;
            color: #495060;
            display: flex;
            .header-middle-con {
                flex: 1;
                margin-left: 60px;
            }
            .header-avator-con {
                width: 300px;
            }
        }
        .header-avator-con {
            display: flex;
            .user-dropdown-menu-con {
                flex: 1;
                text-align: center;
                padding-right: 20px;
            }
        }
    }

    .single-page-con {
        background: #F0F0F0;
        position: absolute;
        top: 100px;
        right: 0;
        bottom: 0;
        left: 200px;
    }
}
</style>
