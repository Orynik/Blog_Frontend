<template>
  <!-- Дизайн взят отсюда
    https://www.behance.net/gallery/121743815/Daily-UI-Challenge-001 -->
  <b-row
    class="auth"
  >
    <transition
      name="fade"
      appear
    >
      <b-col
        class="auth-banner d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="auth-banner-text d-flex flex-column align-content-start align-items-start"
        >
          <h2
            class="auth-banner-text_title mb-4"
          >
            Добро пожаловать!
          </h2>

          <span
            class="auth-banner-text_describe mb-3"
          >
            Зарегистрируйся и стань частью нашего дружного блога!<br>
          </span>

          <router-link
            to="/registration"
            class="btn auth-banner_button-action"
          >
            Регистрация
          </router-link>
        </div>
      </b-col>
    </transition>

    <transition
      name="fade"
      appear
    >
      <b-col>
        <b-container
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <transition
            name="fade"
          >
            <div
              v-show="isErrored"
              class="alert alert-warning w-100"
              role="alert"
            >
              {{ errorText }}
            </div>
          </transition>

          <transition
            name="fade"
          >
            <div
              v-if="isAuth"
            >
              <div
                class="alert alert-success"
                role="alert"
              >
                Вы успешно вошли в учетную запись!
              </div>

              <router-link
                to="/"
                class="btn btn-primary"
              >
                Вернуться на главную
              </router-link>
            </div>
          </transition>

          <transition
            name="form"
          >
            <form
              v-if="!isAuth"
              class="form-auth d-flex flex-column align-items-between"
            >
              <h1
                class="text-center mb-5"
              >
                Авторизация
              </h1>

              <label
                class="form-auth_label pl-3"
                for="email"
              >
                Почта:
              </label>

              <input
                id="email"
                v-model="user.email"
                class="form-auth_input-text mb-4"
                placeholder="Введите свою почту"
                type="email"
              >

              <label
                class="form-auth_label pl-3"
                for="password"
              >
                Пароль:
              </label>

              <input
                id="password"
                v-model="user.password"
                class="form-auth_input-text mb-3"
                placeholder="Введите свой пароль"
                type="password"
              >

              <b-button
                class="form-auth-submit"
                @click="handleSubmit($event)"
              >
                Отправить
              </b-button>
            </form>
          </transition>
        </b-container>
      </b-col>
    </transition>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {
        password: '',
        email: ''
      },
      submitted: false,
      isErrored: false,
      errorText: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleSubmit (event) {
      event.preventDefault()

      this.isErrored = false
      this.submitted = true

      const result = await this.login(this.user)
      if (result != true) {
        this.errorText = result
        this.isErrored = true
      }
      this.submitted = false
    }
  },
  computed: {
    ...mapGetters(['getStatusAuth']),
    isAuth () {
      return this.getStatusAuth
    }
  }
}
</script>

<style>
@import "../styles/auth/form-auth.css";
@import "../styles/auth/form-auth_input-text.css";
@import "../styles/auth/form-auth_label.css";
@import "../styles/auth/form-auth-submit.css";

@import "../styles/auth/auth-banner-text.css";
@import "../styles/auth/auth-banner.css";
@import "../styles/auth/auth-banner_title.css";
@import "../styles/auth/auth-banner_describe.css";
@import "../styles/auth/auth-banner_button-action.css";
</style>
