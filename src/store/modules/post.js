import api from '@/api/index'

export default {
  actions: {
    async postArticle (ctx, article) {
      let currentArticleID = 0
      const arrayOfArticles = ctx.state.articles
      for (let i = 0; i < arrayOfArticles.length; i++) {
        if (arrayOfArticles[i].id > currentArticleID) {
          currentArticleID = arrayOfArticles[i].id
        }
      }

      article.id = currentArticleID + 1
      return await api.postArticle(article)
    },
    async postComment (ctx, comment) {
      return api.postComment(comment).then(
        // В случае возвращение успешного промиса мы записываем в локальное
        // хранилище коммент
        () => {
          ctx.commit('addComment', comment)
          return true
        },
        (error) => {
          return new Error(error)
        }
      )
    }
  },
  mutations: {
    addComment (state, comment) {
      comment.date = new Date(comment.date).toLocaleString('ru', {
        month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
      })
    }
  },
  state: {
    articles: [],
    categories: []
  },
  getters: {
    getCategories (state) {
      return state.categories
    }
  }
}
