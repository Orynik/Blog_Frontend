import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            //Перед каждым новым роутом делать 
            // /blogongo-vue/, чтобы работало на сервере
            path: "/blogongo-vue/",
            component: () => import("./components/Index")
        }
    ]
})