<template>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Авторизация</h1>
        <div class="alert alert-warning" role="alert" v-if = "isErrored">
           {{errorText}}
        </div>
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
            //TODO: Доделать обработку ошибок
                password: "",
                email: "",
            },
            submitted: false,
            isErrored: false,
            errorText: ""
        };
    },
    methods:{
        ...mapActions(['login']),
        async handleSubmit(){
            this.submitted = true;
            await this.login(this.user).catch(
                (error) => {
                    alert(error)
                    if(error == "Error: not auth"){
                        this.errorText = "Неверно введены логин или пароль."
                    }if(error == "Error: server errored"){
                        this.errorText = "Ошибка сервера. Попробуйте повторить запрос позже"
                    }
                    this.isErrored = true
                }
            )
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