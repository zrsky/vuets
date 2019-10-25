<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 14:54:31
 * @LastEditTime: 2019-09-25 14:57:02
 * @LastEditors: Please set LastEditors
 -->
<template>
<Menu :theme="theme" :active-name="$route.name" :open-names="openNames" width="200px" @on-select="changeMenu">
    <template v-for="item in menuList">
        <MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="'menuitem' + item.name">
        <Icon :type="item.children[0].icon || item.icon" :size="iconSize" :key="'menuicon' + item.name"></Icon>
        <span class="layout-text" :key="'title' + item.name">{{ item.children[0].title}}</span>
        </MenuItem>

        <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
            <template slot="title">
                <Icon :type="item.icon" :size="iconSize"></Icon>
                <span class="layout-text">{{ item.title }}</span>
            </template>
            <template v-for="child in item.children">
                <MenuItem :name="child.name" :key="'menuitem' + child.name">
                <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name"></Icon>
                <span class="layout-text" :key="'title' + child.name">{{ child.title }}</span>
                </MenuItem>
            </template>
        </Submenu>
    </template>
</Menu>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';

@Component
export default class SidebarMenu extends Vue {
    @Prop({
        type: Array
    }) menuList!: any[]
    @Prop({
        type: Array
    }) openNames!: any[]
    @Prop({
        type: Number
    }) iconSize?: number
    theme = 'light'

    mounted() {
        console.log(this.$route);
        console.log(this.menuList);
    }

    public getThis() {
        console.log(this);
    }

    changeMenu(active: any) {
        console.log(active)
        this.$router.push({
            name: active
        })
        this.$emit('on-change', active);
    }

}
</script>

<style lang="scss" scoped>

</style>
