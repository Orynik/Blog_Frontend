const RestURL = process.env.VUE_APP_REST_API_URL

export default {
  async fetchCategories () {
    const response = await fetch(`${RestURL}/categories`, {
      method: 'GET'
    })

    if ((await response).ok) {
      const data = await response.json()
      return await Object.values(data)
    } else {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }
  }
}
