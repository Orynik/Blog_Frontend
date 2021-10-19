<template>
  <b-row class="auth">
    <transition name="fade" appear>
      <b-col
        class="
          auth-banner
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <div
          class="
            auth-banner-text
            d-flex
            flex-column
            align-content-start align-items-start
          "
        >
          <h2 class="auth-banner-text_title mb-4">
            Создай свою учетную запись!
          </h2>
          <span class="auth-banner-text_describe mb-3">
            Это просто. Начни создавать и комментировать крутые статьи уже
            сейчас.<br />
          </span>
        </div>
      </b-col>
    </transition>
    <transition name="fade" appear>
      <b-col>
        <b-container
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <transition name="fade">
            <div
              class="alert alert-warning w-100"
              role="alert"
              v-if="isErrored"
            >
              {{ errorText }}
            </div>
          </transition>
          <transition name="fade">
            <div v-if="isCreated">
              <div class="alert alert-success" role="alert">
                Вы успешно создали учетную запись
              </div>
              <router-link to="/" class="btn btn-primary"
                >Вернуться на главную</router-link
              >
            </div>
          </transition>
          <transition name="form">
            <form
              class="form-auth d-flex flex-column align-items-between"
              v-if="!isCreated"
              @submit.prevent="handleSubmit($event)"
            >
              <h1 class="text-center mb-5">Регистрация</h1>
              <label class="form-auth_label pl-3" for="email">Почта:</label>
              <input
                class="form-auth_input-text mb-4"
                placeholder="Введите свою почту"
                type="email"
                id="email"
                v-model="user.email"
              />
              <label class="form-auth_label pl-3" for="password">Пароль:</label>
              <input
                class="form-auth_input-text mb-3"
                placeholder="Введите свой пароль"
                type="password"
                id="password"
                v-model="user.password"
              />
              <b-button type="submit" class="form-auth-submit"
                >Отправить</b-button
              >
            </form>
          </transition>
        </b-container>
      </b-col>
    </transition>
  </b-row>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        password: "",
        email: "",
      },
      submitted: false,
      isCreated: false,
      isErrored: false,
      errorText: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async handleSubmit(e) {
      e.preventDefault();

      this.submitted = true;
      if (this.user.password.length > 6) {
        let result = await this.register(this.user);

        if (result == true) {
          this.isCreated = true;
          this.isErrored = false;
        } else {
          this.errorText = result;
          this.isErrored = true;
        }
      } else {
        this.errorText = "Пароль должен быть длиннее 6 символов";
        this.isErrored = true;
      }

      this.submitted = false;
    },
  },
};
</script>

<style scoped>
@import "../styles/auth/form-auth.css";
@import "../styles/auth/form-auth_input-text.css";
@import "../styles/auth/form-auth_label.css";
@import "../styles/auth/form-auth-submit.css";

@import "../styles/auth/auth-banner-text.css";
@import "../styles/auth/auth-banner.css";
@import "../styles/auth/auth-banner_title.css";
@import "../styles/auth/auth-banner_describe.css";
@import "../styles/auth/auth-banner_button-action.css";

.auth-banner {
  background-image: url("../assets/regLeftImage.jpg");
}
</style>