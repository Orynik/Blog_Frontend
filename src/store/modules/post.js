import api from "@/api/index"
import userService from "@/api/userService"
import { Store } from "vuex";

export default{
    actions: {
        async fetchArticles(ctx){
            const articles = await api.getArticles();
            ctx.commit('updateArticles',articles)
        },
        async fetchCategories(ctx){
            const categories = await api.getCategories();
            ctx.commit('updateCategories',categories)
        },
        async fetchComments(ctx){
            const comments = await api.getComments()
            ctx.commit('updateComments',comments)
        },
        async postArticle(ctx,article){
            let currentArticleID = 0;
            let arrayOfArticles = ctx.state.articles;
            for(let i =0 ; i < arrayOfArticles.length;i++){
                if(arrayOfArticles[i].id > currentArticleID){
                    currentArticleID = arrayOfArticles[i].id
                };
            };
            article.id = currentArticleID + 1;
            return await api.postArticle(article)
        }
    },
    mutations:{
        updateComments(state,comments){
            state.comments = comments
        },
        updateArticles(state,articles){
            state.articles = articles
        },
        updateCategories(state,categories){
            state.categories = categories;
        },
        addComment(state,comment){
            let currentCommentID = 0;
            for(let i = 0 ; i< state.comments.length;i++){
                if(state.comments[i].id > currentCommentID){
                    currentCommentID = state.comments[i].id
                }
            }
            comment.id = currentCommentID + 1

            state.comments.unshift(comment)
            for(let numOfArticle = 0; numOfArticle < state.articles.length; numOfArticle++){
                if (state.articles[numOfArticle].id === comment.idArticle){
                    state.articles[numOfArticle].comments.unshift(comment)
                    break
                }
            }
            api.postComment(comment)
            return true
        }
    },
    state: {
        articles: [],
        categories: [],
        comments: []
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