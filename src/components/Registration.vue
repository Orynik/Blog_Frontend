<template>
    <transition name = "fade" appear>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Регистрация</h1>
        <transition name = "fade">
            <div class="alert alert-warning" role="alert" v-show = "isErrored">
                {{errorText}}
            </div>
        </transition>
        <transition name="fade">
            <div v-if = "isCreated">
                <div class="alert alert-success" role="alert">
                    Вы успешно создали учетную запись
                </div>
                <router-link to="/" class = "btn btn-primary">Вернуться на главную</router-link>
            </div>
        </transition>
        <transition name = "fade">
            <form class = "mx-auto form-auth" @submit.prevent ="handleSubmit" v-if = "!isCreated">
                <div class = "d-flex flex-column mx-auto">
                    <label for="email">Почта:</label>
                    <input type="email" id = "email" v-model = "user.email" class = "form-auth-input">
                    <label for="password">Пароль:</label>
                    <input type="password" id = "password" v-model = "user.password" class = "form-auth-input">
                    <b-button type = "submit" class = "form-auth-submit" :disabled = "submitted">Отправить</b-button>
                </div>
            </form>
        </transition>
    </b-container>
    </transition>
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
            this.submitted = true;
            let result = await this.register(this.user)

            if(result == true){
                this.isCreated = true
            }else{
                this.errorText = result
                this.isErrored = true
            }

            this.submitted = false
        }
    }
}
</script>