const RestURL = process.env.VUE_APP_REST_API_URL

export default {
  async fetchComments () {
    const response = await fetch(`${RestURL}/comments`, {
      method: 'GET'
    })

    if ((await response).ok) {
      const data = await response.json()

      return await Object.values(data)
    } else {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }
  },
  async postComment (comment) {
    const response = fetch(`${RestURL}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment)
    })

    if (!(await response).ok) {
      throw new Error((await response).status + ':' + (await response).statusText)
    }

    return 'done'
  }
}
