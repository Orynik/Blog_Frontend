<template>
  <b-navbar
    type="dark"
    variant="info"
    class="header"
  >
    <b-navbar-brand>
      <img
        src="@/assets/logo.png"
        height="45"
        alt="logo"
      >
    </b-navbar-brand>
    <router-link to="/">
      Главная
    </router-link>
    <router-link to="/createArticle">
      Написать свою статью
    </router-link>
    <b-navbar-nav
      v-if="!isAuth"
      class="ml-auto header"
    >
      <router-link to="/registration">
        Регистрация
      </router-link>
      <router-link to="/login">
        Вход
      </router-link>
    </b-navbar-nav>
    <b-navbar-nav
      v-else
      class="logined-user ml-auto header d-flex justify-content-between"
    >
      <span class="username">{{ email }}</span>
      <span
        class="logout category"
        @click="clear()"
      >Выйти</span>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    isAuth () {
      return this.getStatusAuth()
    },
    email () {
      return this.getEmail()
    }
  },
  methods: {
    ...mapGetters(['getStatusAuth', 'getEmail']),
    ...mapMutations(['cleanAuth']),
    clear () {
      this.cleanAuth()
    }
  }
}
</script>

<style scoped>
.header > a:hover {
  text-decoration: none;
}
.header > a {
  margin-right: 10px;
}
.header {
  padding: 0 16px;
}
.logined-user {
  min-width: 250px;
}
.category {
  color: white;

  transition: 0.2s ease-in color;

  cursor: pointer;
}
</style>
