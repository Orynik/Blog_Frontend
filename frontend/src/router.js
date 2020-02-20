import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/home"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: () => import('./views/about.vue')
        },
        {
            path: "/reg",
            component: () => import('./views/reg.vue')
        },
        {
            path: "/signup",
            component: () => import('./views/signup.vue')
        }
    ]
})