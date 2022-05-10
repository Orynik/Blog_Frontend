import api from '@/api/userService'

export default {
  actions: {
    async register (ctx, user) {
      return await api.register(user).catch(
        (error) => {
          return 'Ошибка сервера. Попробуйте повторить запрос позже', error
        }
      )
    },
    async login (ctx, user) {
      const request = await api.login(user).catch(
        (error) => {
          if (error === 'Error: not auth') {
            return 'Неверно введены логин или пароль.'
          } if (error === 'Error: server errored') {
            return 'Ошибка сервера. Попробуйте повторить запрос позже'
          } else {
            return 'Ошибка сервера. Попробуйте повторить запрос позже'
          }
        }
      )
      if (request) {
        ctx.commit('updateAuth', user.email)
      }
      return request
    },
    async getEmailUser (ctx) {
      if (document.cookie.length) {
        const request = await api.cookiesLogin()

        // FIXME:Временный костыль на отсутствие бека
        if (request !== undefined) {
          ctx.commit('updateAuth', request.email)
        } else {
          ctx.commit('updateAuth', 'dkrovel@gmail.com')
        }

        return true
      }
    }
  },
  mutations: {
    setEmail (store, data) {
      store.email = data
    },
    updateAuth (store, data) {
      store.email = data
      store.isAuthed = true
    },
    cleanAuth (store) {
      store.email = ''
      store.isAuthed = false
    }
  },
  state: {
    isAuthed: false,
    email: 'dkrovel@gmail.com'
  },
  getters: {
    getStatusAuth (store) {
      return store.isAuthed
    },
    getEmail (store) {
      return store.email
    }
  }
}
