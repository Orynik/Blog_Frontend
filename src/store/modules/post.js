import api from "@/api/index"

export default{
    actions: {
        async fetchArticles(ctx){
            const articles = await api.getArticles();
            ctx.commit('updateArticles',articles)
        },
        async fetchCategories(ctx){
            const categories = await api.getCategories();
            ctx.commit('updateCategories',categories)
        }

    },
    mutations:{
        updateArticles(state,articles){
            state.articles = articles
        },
        updateCategories(state,categories){
            state.categories = categories;
        },
        incLikes(state,idArticles){
            state.articles[idArticles].likes++
        },
        decLikes(state,idArticles){
            state.articles[idArticles].likes--
        }
    },
    state: {
        articles: [],
        categories: []
    },
    getters:{
        getArticles(state){
            return state.articles
        },
        getLatestArticles(state){
            return state.articles.slice(0,4)
        },
        getCategories(state){
            return state.categories;
        }
    }
}