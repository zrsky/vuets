/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 17:29:04
 * @LastEditTime: 2019-09-25 14:00:45
 * @LastEditors: Please set LastEditors
 */
import { router } from "./router";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
import Cookies from "js-cookie";

router.beforeEach((to, from, next) => {
    // Cookies.remove("user");
    //to and from are Route Object,next() must be called to resolve the hook}
    nprogress.start();
    if (Cookies.get("locking") === "1" && to.name !== "locking") {
        // 判断当前是否是锁定状态
        next({
            replace: true,
            name: "locking"
        });
    } else if (Cookies.get("locking") === "0" && to.name === "locking") {
        next(false);
    } else {
        if (!Cookies.get("user") && to.name !== "login") {
            // 判断是否已经登录且前往的页面不是登录页
            next({
                name: "login"
            });
        } else if (Cookies.get("user") && to.name === "login") {
            // 判断是否已经登录且前往的是登录页
            next({
                name: "home_index"
            });
        }
        //     // else {
        //     //     const curRouterObj = Util.getRouterObjByName([otherRouter, ...appRouter], to.name);
        //     //     if (curRouterObj && curRouterObj.access !== undefined) { // 需要判断权限的路由
        //     //         if (curRouterObj.access === parseInt(Cookies.get('access'))) {
        //     //             Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next); // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
        //     //         } else {
        //     //             next({
        //     //                 replace: true,
        //     //                 name: 'error-403'
        //     //             });
        //     //         }
        //     //     } else { // 没有配置权限的路由, 直接通过
        //     //         Util.toDefaultPage([...routers], to.name, router, next);
        //     //     }
        //     // }
    }
    next();
});

router.afterEach(route => {
    nprogress.done();
});
