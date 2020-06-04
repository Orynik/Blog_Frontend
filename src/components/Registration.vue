<template>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Регистрация</h1>
        <div class="alert alert-warning" role="alert" v-if="isErrored">
            {{errorText}}
        </div>
        <form class = "mx-auto form-auth" @submit.prevent ="handleSubmit" v-if = "!isCreated">
            <div class = "d-flex flex-column mx-auto">
                <!-- <label for="login">Логин:</label> -->
                <!-- <input type="text" id = "login" v-model = "user.login" class = "form-auth-input"> -->
                <label for="email">Почта:</label>
                <input type="email" id = "email" v-model = "user.email" class = "form-auth-input">
                <label for="password">Пароль:</label>
                <input type="password" id = "password" v-model = "user.password" class = "form-auth-input">
                <b-button type = "submit" class = "form-auth-submit" :disabled = "submitted">Отправить</b-button>
            </div>
        </form>
        <div class="alert alert-success" role="alert" v-else>
            Вы успешно создали учетную запись
        </div>
    </b-container>
</template>
<script>
import {mapActions} from "vuex"

export default {
    data(){
        return {
            user: {
                password: "",
                email: ""
            },
            submitted: false,
            isCreated: false,
            isErrored: false,
            errorText: ""
        };
    },
    methods:{
        ...mapActions(['register']),
        async handleSubmit(e){
            let state
            this.submitted = true;
            this.register(this.user).then(
                (result) => {
                    state = true
                    this.isCreated = true
                    this.submitted = false;
                },
                (error) => {
                    state = error
                    if(error == "Error: server errored"){
                        this.errorText = "Ошибка сервера. Попробуйте повторить запрос позже"
                    }else{
                        this.errorText = "Ошибка сервера. Попробуйте повторить запрос позже"
                    }
                    this.isErrored = true
                    this.submitted = false;
                }
            )
        }
    }
}
</script>