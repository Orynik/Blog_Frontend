const RestURL = process.env.VUE_APP_REST_API_URL

export default {
  async fetchArticle () {
    const response = await fetch(`${RestURL}/articles`, {
      method: 'GET',
      mode: 'cors'
    })

    if ((await response).ok) {
      const data = await response.json()
      /* Сменил, так как статический xxx/ArticlesPage.json неправильно обрабатывает json,
            и не разбивает его Object.values в [0] индекс, а нормальный REST заполянет
            весь массив
            */
      return await Object.values(data)
    } else {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }
  },
  async postArticle (article) {
    const response = fetch(`${RestURL}/articles/post`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(article)
    })

    if (!(await response).ok) {
      return `Ошибка HTTP: ${response.status}`
    }
    return 'done'
  }
}
