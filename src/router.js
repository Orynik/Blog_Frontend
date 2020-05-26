import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/404",
            name: "4040",
            component: () => import("@/pages/404")
        },
        {
            //Перед каждым новым роутом делать 
            // /blogongo-vue/, чтобы работало на сервере
            path: "/",
            redirect: "/blogongo-vue/"
        },
        {
            path: "*",
            redirect: "404"
        },
        {
            path: "/blogongo-vue/",
            name: "root",
            component: () => import("@/components/Index")
        },
        {
            path: "/articles/:id",
            name: "article",
            props: true,
            component: () => import("@/components/ArticleItem")
        },
        {
            path: "/createArticle",
            component: () => import("@/components/CreateArticle")
        },
        {
            path: "/registration",
            component: () => import("@/components/Registration")
        },
        {
            path: "/login",
            component: () => import("@/components/Login")
        }
    ]
})