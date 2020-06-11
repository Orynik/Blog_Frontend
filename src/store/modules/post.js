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
        },
        async postComment(ctx,comment){
            let currentCommentID = 0;

            for(let i = 0 ; i< ctx.state.comments.length;i++){
                if(ctx.state.comments[i].id > currentCommentID){
                    currentCommentID = ctx.state.comments[i].id
                }
            }

            comment.id = currentCommentID + 1

            let data = api.postComment(comment).then(
                //В случае возвращение успешного промиса мы записываем в локальное
                //хранилище коммент
                () => {
                    ctx.commit("addComment",comment)
                    return true
                },
                (error) => {
                    return new Error(error)
                }
            )

            return data
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
            comment.date = new Date(comment.date).toLocaleString('ru', {
                month: 'long',day: "numeric",year: "numeric",hour: 'numeric',minute: 'numeric'
            })

            state.comments.unshift(comment)

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