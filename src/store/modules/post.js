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
        addArticle(state,articles){
            state.articles.push(articles);
        },
        addComment(state,comment){
            for(let numOfArticle = 0; numOfArticle < state.articles.length; numOfArticle++){
                if (state.articles[numOfArticle].id === comment.idArticle){
                    state.articles[numOfArticle].comments.unshift(comment)
                    break
                }
            }
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

        //Поиск нужной статьи после роутинга на страницу XXX:8080/articles/:id
        getCurrentArticle(state){
            return id => state.articles.filter(item =>{
                return item.id === id
            })
        },

        getCategories(state){
            return state.categories;
        }
    }
}