<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 16:56:23
 * @LastEditTime: 2019-09-25 13:52:29
 * @LastEditors: Please set LastEditors
 -->
<template>
<div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
        <Card :bordered="false">
            <p slot="title">
                <Icon type="log-in"></Icon>
                欢迎登录易联云移动售气管理系统
            </p>
            <div class="form-con">
                <Form ref="loginForm" :model="form" :rules="rules">
                    <FormItem prop="userName">
                        <Input v-model="form.userName" placeholder="请输入用户名">
                        <span slot="prepend">
                            <Icon :size="16" type="person"></Icon>
                        </span>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="form.password" placeholder="请输入密码">
                        <span slot="prepend">
                            <Icon :size="14" type="locked"></Icon>
                        </span>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button @click="handleSubmit" :loading="savePassLoading" type="primary" long>登录</Button>
                    </FormItem>
                </Form>
                <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
            </div>
        </Card>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';
import Cookies from 'js-cookie';
import {
    login
} from '@/api/api';

@Component({
    name: 'login'
})
export default class Home extends Vue {
    savePassLoading = false
    form = {
        userName: '',
        password: ''
    }
    rules = {
        userName: [{
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }]
    }
    handleSubmit() {
        let ths = this;
        console.log(ths.form);
        (this.$refs.loginForm as any).validate((valid: boolean) => {
            if (valid) {
                ths.savePassLoading = true;
                console.log(ths.form)
                login({
                    userActt: ths.form.userName,
                    password: ths.form.password
                }).then((resp: any) => {
                    console.log(1)
                    this.savePassLoading = false;
                    Cookies.set('user', ths.form.userName);
                    Cookies.set('password', ths.form.password);
                    // this.$store.commit('setAvator',
                    //     'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
                    // );
                    if (ths.form.userName === 'iview_admin') {
                        Cookies.set('access', '0');
                    } else {
                        Cookies.set('access', '1');
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }).catch(error => {
                    ths.savePassLoading = false;
                    this.$Message.error(error.message + "[" + error.responseCode + "]");
                });
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background-image: url("../images/login-bg.png");
    // background-image: url('https://file.iviewui.com/iview-admin/login_bg.jpg');
    background-size: cover;
    background-position: center;
    position: fixed;

    &-con {
        position: absolute;
        right: 160px;
        top: 50%;
        transform: translateY(-60%);
        width: 300px;

        &-header {
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }

        .form-con {
            padding: 10px 0 0;
        }

        .login-tip {
            font-size: 10px;
            text-align: center;
            color: #c3c3c3;
        }
    }
}
</style>
