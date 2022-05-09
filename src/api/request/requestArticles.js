const RestURL = process.env.VUE_APP_REST_API_URL

export default {
  async postArticle (article) {
    return fetch(`${RestURL}/articles/post`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(article)
    })
  }
}
