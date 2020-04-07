import api from "@/api/index"

export default{
    actions: {
        async fetchArticles(ctx){
            const articles = await api.getArticles();
            ctx.commit('updateArticles',articles)
        }
    },
    mutations:{
            updateArticles(state,articles){

            state.articles = articles
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
    },
    getters:{
        getArticles(state){
            return state.articles
        },
        getLatestArticles(state){
            return state.articles.slice(0,4)
        }
    }
}