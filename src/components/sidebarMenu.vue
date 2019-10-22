<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 14:54:31
 * @LastEditTime: 2019-09-25 14:57:02
 * @LastEditors: Please set LastEditors
 -->
<template>
    <Menu :theme="theme" width="200px">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                内容管理1
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
    </Menu>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
export default class SidebarMenu extends Vue {
    theme = 'light'
}
</script>

<style lang="scss" scoped>

</style>
