import api from '@/api/index'

export default {
  actions: {
    async fetchArticles (ctx) {
      const articles = await api.getArticles()
      ctx.commit('updateArticles', articles)
    },
    async fetchCategories (ctx) {
      const categories = await api.getCategories()
      ctx.commit('updateCategories', categories)
    },
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
    updateArticles (state, articles) {
      state.articles = articles
    },
    updateCategories (state, categories) {
      state.categories = categories
    },
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
    getArticles (state) {
      return state.articles
    },

    // Поиск нужной статьи после роутинга на страницу XXX:8080/articles/:id
    getCurrentArticle (state) {
      return id => state.articles.filter(item => {
        return item.id === id
      })
    },

    getCategories (state) {
      return state.categories
    }
  }
}
