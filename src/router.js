import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/404",
            name: "404",
            component: () => import("@/pages/404")
        },
        {
            path: "*",
            redirect: "404"
        },
        {
            path: "/",
            component: () => import("@/components/Index")
        },
        {
            path: "/articles/:id",
            name: "article",
            props: true,
            component: () => import("@/components/Article")
        },
        {
            path: "/createArticle",
            component: () => import("@/components/Create")
        }
    ]
})