<template>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Авторизация</h1>
        <form class = "mx-auto form-auth" v-if="!isAuth">
            <div class = "d-flex flex-column mx-auto">
                <label for="email">Почта:</label>
                <input type="email" id = "email" v-model = "user.email" class = "form-auth-input">
                <label for="password">Пароль:</label>
                <input type="password" id = "password" v-model = "user.password" class = "form-auth-input">
                <b-button @click="handleSubmit()" class = "form-auth-submit">Отправить</b-button>
            </div>
        </form>
        <div class="alert alert-success" role="alert" v-else>
            Вы успешно вошли в учетную запись!
        </div>
    </b-container>
</template>
<script>
import {mapActions, mapGetters} from "vuex"

export default {
    data(){
        return {
            user: {
                password: "",
                email: ""
            },
            submitted: false,
        };
    },
    methods:{
        ...mapActions(['login']),
        handleSubmit(){
            this.submitted = true;
            this.login(this.user)
        }
    },
    computed: {
        ...mapGetters(["getStatusAuth"]),
        isAuth(){
            return this.getStatusAuth
        }
    }
}
</script>