<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:43:09
 * @LastEditTime: 2019-10-14 15:39:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home_main">
    <Row>
       <Col style="text-align: left;">
            <div class="logo">
              <img src="../assets/images/logo.png"/>
            </div>
            <sidebar-menu></sidebar-menu>
        </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import sidebarMenu from '@/components/sidebarMenu.vue';
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
  @someModule.Mutation('saveMenuList') saveMenuList: any;
  @someModule.Getter('getMenuList') getMenuList: any;

  theme = 'light'
  
  mounted() {
    this.saveMenuList();
    console.log(this.menuList);
  }
}
</script>
<style lang="scss" scoped>
    .home_main {
      .logo {
        img {
          height: 44px;
        }
      }
    }
</style>
