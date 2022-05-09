const RestURL = process.env.VUE_APP_REST_API_URL

export default {
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
