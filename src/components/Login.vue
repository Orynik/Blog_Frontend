<template>
    <transition name = "fade" appear>
    <b-container  class = "mx-auto container">
        <h1 class = "text-center pt-4">Авторизация</h1>
        <transition name = "fade">
            <div class="alert alert-warning" role="alert" v-if = "isErrored">
               {{errorText}}
            </div>
        </transition>
        <transition name = "fade">
            <div v-if = isAuth>
                <div class="alert alert-success" role="alert" >
                    Вы успешно вошли в учетную запись!
                </div>
                <router-link to="/" class = "btn btn-primary">Вернуться на главную</router-link>
            </div>
        </transition>
        <transition name = "fade">
            <form class = "mx-auto form-auth" v-if="!isAuth">
                <div class = "d-flex flex-column mx-auto">
                    <label for="email">Почта:</label>
                    <input type="email" id = "email" v-model = "user.email" class = "form-auth-input">
                    <label for="password">Пароль:</label>
                    <input type="password" id = "password" v-model = "user.password" class = "form-auth-input">
                    <b-button @click="handleSubmit()" class = "form-auth-submit">Отправить</b-button>
                </div>
            </form>
        </transition>
    </b-container>
    </transition>
</template>
<script>
import {mapActions, mapGetters} from "vuex"

export default {
    data(){
        return {
            user: {
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
            let result = await this.login(this.user)
            if(result != true){
                this.errorText = result
                this.isErrored = true
            }
            this.submitted = false
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