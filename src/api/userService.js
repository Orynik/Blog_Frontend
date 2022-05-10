const RestURL = process.env.VUE_APP_REST_API_URL

export default {
  async register (user) {
    const request = await fetch(`${RestURL}/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      mode: 'cors'
    })

    if (request.status === 201) {
      return true
    } if (request.status === 500) {
      throw new Error('server errored')
    } else {
      throw new Error((await request).status + ' : ' + (await request).statusText)
    }
  },
  async login (user) {
    const request = await fetch(`${RestURL}/sessions`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      mode: 'cors'
    })

    if (request.status === 200) {
      return true
    } if (request.status === 401) {
      throw new Error('not auth')
    } if (request.status === 500) {
      throw new Error('server errored')
    } else {
      throw new Error((await request).status + ' : ' + (await request).statusText)
    }
  },
  async cookiesLogin () {
    const request = await fetch(`${RestURL}/private/whoami`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    }).then(
      (result) => {
        if (result.ok) {
          return result.json()
        }
      },
      (err) => {
        return new Error(err)
      }
    )

    return await request
  }
}
