const RestURL = process.env.VUE_APP_REST_API_URL

export default {
  fetchArticles () {
    return fetch(`${RestURL}/articles`, {
      method: 'GET',
      mode: 'cors'
    })
      .then((data) => {
        return data.json()
      })
  },
  fetchArticle (id) {
    return fetch(`${RestURL}/articles/${id}`, {
      method: 'GET',
      mode: 'cors'
    })
      .then((data) => {
        return data.json()
      })
  },
  fetchCategories () {
    return fetch(`${RestURL}/categories`, {
      method: 'GET'
    })
      .then((data) => {
        return data.json()
      })
  },
  async postArticle (article) {
    return fetch(`${RestURL}/articles/post`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(article)
    })
  }
}
