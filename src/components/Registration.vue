<template>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Регистрация</h1>
        <form class = "mx-auto form-auth" @submit.prevent ="handleSubmit">
            <div class = "d-flex flex-column mx-auto">
                <label for="login">Логин:</label>
                <input type="text" id = "login" v-model = "user.login" class = "form-auth-input">
                <label for="password">Пароль:</label>
                <input type="text" id = "password" v-model = "user.password" class = "form-auth-input">
                <b-button type = "submit" class = "form-auth-submit" :disabled = "submitted">Отправить</b-button>
            </div>
        </form>
    </b-container>
</template>
<script>
import {mapActions} from "vuex"

export default {
    data(){
        return {
            user: {
                login: "",
                password: ""
            },
            submitted: false,
        };
    },
    methods:{
        ...mapActions(['register']),
        handleSubmit(e){
            this.submitted = true;
            this.register(this.user)
        }
    }
}
</script>